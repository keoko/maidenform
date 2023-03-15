/* eslint-disable import/prefer-default-export */

import { getConfigValue } from './configs.js';
import { readBlockConfig } from './lib-franklin.js';

// eslint-disable-next-line import/no-cycle
import { fetchIndex } from './scripts.js';

const preloadedImages = new Set();
export const PLACEHOLDER_IMG = new URL('/product-images/placeholder.jpg', document.baseURI).toString();

/* Common query fragments */

const priceFieldsFragment = `fragment priceFields on ProductViewPrice {
  regular {
      amount {
          currency
          value
      }
  }
  final {
      amount {
          currency
          value
      }
  }
}`;

/* Queries PDP */

export const refineProductQuery = `query RefineProductQuery($sku: String!, $variantIds: [String!]!) {
  refineProduct(
    sku: $sku,
    optionIds: $variantIds
  ) {
    images(roles: []) {
      url
      roles
      label
    }
    ... on SimpleProductView {
      price {
        final {
          amount {
            currency
            value
          }
        }
        regular {
          amount {
            currency
            value
          }
        }
      }
    }
    addToCartAllowed
  }
}`;

export const productStockQuery = `query StockQuery($urlKey: String!) {
  products(
    filter: { url_key: { eq: $urlKey } }
    pageSize: 20
    currentPage: 1
  ) {
    items {
      name
      stock_status
      ... on ConfigurableProduct {
        variants {
          attributes {
            uid
            label
            code
          }

          product {
            sku
            name
            stock_status
          }
        }
      }
    }
  }
}`;

export const productDetailQuery = `query ProductQuery($sku: String!) {
  products(skus:[$sku]) {
    __typename
    id
    sku
    name
    description
    shortDescription
    url
    images(roles: []) {
      url
      label
      roles
    }
    attributes(roles: []) {
      name
      label
      value
      roles
    }
  ... on SimpleProductView {
      price {
        final {
          amount {
            value
            currency
          }
        }
        regular {
          amount {
            value
            currency
          }
        }
      }
    }
  ... on ComplexProductView {
      options {
        id
        title
        required
        values {
          id
          title
  
        }
      }
      priceRange {
        maximum {
          ...priceFields
        }
        minimum {
          ...priceFields
        }
      }
    }
  }
}
${priceFieldsFragment}`;

export const productBreadcrumbQuery = `
  query ProductBreadcrumbQuery($urlKey: String!) {
    products(
        filter: { url_key: { eq: $urlKey } }
        pageSize: 20
        currentPage: 1
    ) {
        items {
            name
            categories {
                name
                url_key
                url_path
                breadcrumbs {
                    category_name
                    category_url_key
                    category_url_path
                }
            }
        }
    }
}
`;

/* Queries PLP */

export const productSearchQuery = `query ProductSearch(
  $currentPage: Int = 1
  $pageSize: Int = 20
  $phrase: String = ""
  $sort: [ProductSearchSortInput!] = []
  $filter: [SearchClauseInput!] = []
) {
  productSearch(
      current_page: $currentPage
      page_size: $pageSize
      phrase: $phrase
      sort: $sort
      filter: $filter
  ) {
      facets {
          title
          type
          attribute
          buckets {
              title
              __typename
              ... on RangeBucket {
                  count
                  from
                  to
              }
              ... on ScalarBucket {
                  count
                  id
              }
              ... on StatsBucket {
                  max
                  min
              }
          }
      }
      items {
          productView {
              name
              sku
              url
              ... on SimpleProductView {
                  price {
                      ...priceFields
                  }
              }
              ... on ComplexProductView {
                  priceRange {
                      minimum {
                          ...priceFields
                      }
                      maximum {
                          ...priceFields
                      }
                  }
                  options {
                      id
                      title
                      values {
                        id
                        title
                      }
                  }
              }
          }
      }
      page_info {
          current_page
          total_pages
          page_size
      }
      total_count
  }
}
${priceFieldsFragment}`;

export const productOptionImageQuery = `query ProductOptionImage($sku: String!, $optionIds: [String!]!) {
  refineProduct(
    sku: $sku,
    optionIds: $optionIds
  ) {
    images(roles: ["small_image"]) {
      url
    }
  }
}`;

/* Common functionality */

export function getSwatchImageUrl(sku, color) {
  // Remove and non-alphanumeric characters
  const colorString = color.replace(/[^a-zA-Z0-9]/g, '');

  return `https://franklin.maidenform.com/images/swatches/HNS_${sku}/HNS_${sku}_${colorString}_sw.jpg`;
}

export function renderFallbackImage(event, fallback = PLACEHOLDER_IMG) {
  const pictureTag = event.target.parentNode;
  for (let i = 0; i < pictureTag.children.length; i += 1) {
    const child = pictureTag.children[i];
    if (child.tagName === 'SOURCE') {
      child.srcset = fallback;
    } else if (child.tagName === 'IMG') {
      child.src = fallback;
    }
  }
}

export async function getProductRatings(productSkus) {
  const skusString = typeof productSkus === 'object' ? productSkus.join(',') : productSkus;

  const endpoint = await getConfigValue('bazaarvoice-endpoint');
  const api = new URL(`${endpoint}/data/statistics.json`);
  api.searchParams.set('apiversion', '5.4');
  api.searchParams.set('passkey', await getConfigValue('bazaarvoice-passkey'));
  api.searchParams.set('Filter', `ProductId:${skusString}`);
  api.searchParams.set('Stats', 'Reviews');

  const response = await fetch(api);
  if (response.ok) {
    const body = await response.json();
    if (body?.Results?.length === 1) {
      return {
        average: body.Results[0].ProductStatistics.ReviewStatistics?.AverageOverallRating,
        count: body.Results[0].ProductStatistics.ReviewStatistics?.TotalReviewCount,
      };
    }

    return body?.Results?.reduce(
      (obj, product) => ({
        ...obj,
        [product.ProductStatistics.ProductId]: {
          average: product.ProductStatistics.ReviewStatistics?.AverageOverallRating,
          count: product.ProductStatistics.ReviewStatistics?.TotalReviewCount,
        },
      }),
      {},
    );
  }
  return { average: null, count: null };
}

export async function performCatalogServiceQuery(query, variables) {
  const headers = {
    'Content-Type': 'application/json',
    'Magento-Environment-Id': '271c8746-f2ed-43c3-8159-e7b7bbe79aac',
    'Magento-Website-Code': 'maidenform',
    'Magento-Store-View-Code': 'maidenform_store_view',
    'Magento-Store-Code': 'maidenform_store',
    'Magento-Customer-Group': '77de68daecd823babbb58edb1c8e14d7106e83bb',
    'x-api-key': 'maidenform-franklin',
  };

  const apiCall = new URL('https://franklin.maidenform.com/cs-graphql-sandbox');
  apiCall.searchParams.append('query', query.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ').replace(/\s\s+/g, ' '));
  apiCall.searchParams.append('variables', variables ? JSON.stringify(variables) : null);

  const response = await fetch(apiCall, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    return null;
  }

  const queryResponse = await response.json();

  return queryResponse.data;
}

export async function performMonolithGraphQLQuery(query, variables) {
  const headers = {
    'Content-Type': 'application/json',
    Store: 'maidenform_store_view',
  };

  const params = new URLSearchParams({
    query: query.replaceAll(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' '),
    variables: JSON.stringify(variables),
  });
  const response = await fetch(
    `https://franklin.maidenform.com/graphql?${params.toString()}`,
    { headers },
  );

  if (!response.ok) {
    return null;
  }

  const json = await response.json();
  return json.data;
}

export function renderPrice(product, format, html, Fragment) {
  // Simple product
  if (product.price) {
    const { regular, final } = product.price;
    if (regular.amount.value === final.amount.value) {
      return html`<span class="price-final">${format(final.amount.value)}</span>`;
    }
    return html`<${Fragment}>
      <span class="price-regular">${format(regular.amount.value)}</span> <span class="price-final">${format(final.amount.value)}</span>
    </${Fragment}>`;
  }

  // Complex product
  if (product.priceRange) {
    const { regular: regularMin, final: finalMin } = product.priceRange.minimum;
    const { final: finalMax } = product.priceRange.maximum;

    if (finalMin.amount.value !== finalMax.amount.value) {
      return html`<span class="price-from">from ${format(finalMin.amount.value)}</span>`;
    }

    if (finalMin.amount.value !== regularMin.amount.value) {
      return html`<${Fragment}>
      <span class="price-regular">${format(regularMin.amount.value)}</span> <span class="price-final">${format(finalMin.amount.value)}</span>
    </${Fragment}>`;
    }

    return html`<span class="price-final">${format(finalMin.amount.value)}</span>`;
  }

  return null;
}

/* PDP specific functionality */

export function getSkuFromUrl() {
  const path = window.location.pathname;
  const result = path.match(/\/products\/[\w|-]+\/([\w|-]+)$/);
  return result?.[1];
}

export function getUrlKeyFromUrl() {
  const path = window.location.pathname;
  const result = path.match(/\/products\/([\w|-]+)\/[\w|-]+$/);
  return result?.[1];
}

async function preloadImage(src) {
  const img = new Image();
  const promise = new Promise((resolve) => {
    img.onload = resolve;
  });
  const preloadWith = window.matchMedia('(max-width: 450px)').matches ? '450' : '700';
  img.src = `${src}?width=${preloadWith}&format=webply&optimize=medium`;
  preloadedImages.add(img);
  return promise;
}

export async function preloadLCPImage() {
  return preloadImage(`${window.origin}/product-images/${getSkuFromUrl().toLowerCase()}.jpg`);
}

const productsCache = {};
export async function getProduct(sku) {
  if (productsCache[sku]) {
    return productsCache[sku];
  }
  const rawProductPromise = performCatalogServiceQuery(productDetailQuery, { sku });

  const productPromise = rawProductPromise.then((productData) => {
    if (!productData?.products?.[0]) {
      return null;
    }

    const product = productData?.products?.[0];

    product.productImages = [{ url: `${window.origin}/product-images/${getSkuFromUrl().toLowerCase()}.jpg` }];

    return product;
  });

  productsCache[sku] = productPromise;
  return productPromise;
}

export async function getCategoryNameFromUrlKey() {
  const possibleProducts = await performMonolithGraphQLQuery(
    productBreadcrumbQuery,
    { urlKey: getUrlKeyFromUrl() },
  );
  const product = possibleProducts?.products?.items?.[0];

  if (!product) {
    return null;
  }

  const clearanceFilter = document.referrer.toLowerCase().includes('clearance')
    ? (category) => category.name.toLowerCase().includes('clearance')
    : (category) => !category.name.toLowerCase().includes('clearance');

  // find the category that matches a PLP
  const plpIndex = (await fetchIndex('query-index')).data;

  const possiblePLPs = product.categories?.filter(
    (category) => plpIndex.find((plp) => plp.path === `/${category.url_key}`),
  ).filter(clearanceFilter);

  return possiblePLPs[0] ?? product.categories[0];
}

export function isPDP() {
  return window.location.href.match(/\/products\/[\w|-]+\/[\w|-]+/) !== null;
}

/* PLP specific functionality */

const getColorSwatchesForProduct = (colorOption, sku) => (
  colorOption ? colorOption.values : [])
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((v) => ({
    ...v,
    image: getSwatchImageUrl(sku, v.title),
  }))
  // Remove options without image
  .filter((v) => v.image);

const mapProduct = (product) => {
  // Parse url_key from url
  const productUrl = new URL(product.url);
  const urlKey = productUrl.pathname.substring(1, productUrl.pathname.length - 5);

  // Find in product.options the object with id = color
  const colorOption = product.options.find((option) => option.id === 'color');
  const colorOptions = getColorSwatchesForProduct(colorOption, product.sku);

  return {
    ...product,
    images: [{ url: new URL(`/product-images/${product.sku.toLowerCase()}.jpg`, document.baseURI).toString() }],
    url_key: urlKey,
    swatches: colorOptions,
    rating: 'loading',
  };
};

export async function loadCategory(state) {
  try {
    // TODO: Be careful if query exceeds GET size limits, then switch to POST
    const variables = {
      pageSize: state.currentPageSize,
      currentPage: state.currentPage,
      sort: [{
        attribute: state.sort,
        direction: state.sortDirection === 'desc' ? 'DESC' : 'ASC',
      }],
    };

    if (state.type === 'search') {
      variables.phrase = state.searchTerm;
    }

    if (Object.keys(state.filters).length > 0) {
      variables.filter = [];
      Object.keys(state.filters).forEach((key) => {
        if (state.filters[key].length > 1) {
          variables.filter.push({ attribute: key, in: state.filters[key] });
        } else if (state.filters[key].length === 1) {
          variables.filter.push({ attribute: key, eq: state.filters[key][0] });
        }
      });
    }

    if (state.type === 'category' && state.category.id) {
      variables.filter = variables.filter || [];
      variables.filter.push({ attribute: 'categoryIds', eq: state.category.id });
    }

    const response = await performCatalogServiceQuery(productSearchQuery, variables);

    // TODO: Ignore errors for now, since some are caused by products with
    // missing price information

    // Parse response into state
    return {
      pages: Math.max(response.productSearch.page_info.total_pages, 1),
      products: {
        items: response.productSearch.items
          .map((product) => mapProduct(product.productView)),
        total: response.productSearch.total_count,
      },
      facets: response.productSearch.facets.filter((facet) => facet.attribute !== 'categories'),
    };
  } catch (e) {
    console.error('Error loading products', e);
    return {
      pages: 1,
      products: {
        items: [],
        total: 0,
      },
      facets: [],
    };
  }
}

export function parseQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const newState = {
    filters: {},
  };
  params.forEach((value, key) => {
    if (key === 'page') {
      newState.currentPage = parseInt(value, 10) || 1;
    } else if (key === 'pageSize') {
      newState.currentPageSize = parseInt(value, 10) || 10;
    } else if (key === 'sort') {
      newState.sort = value;
    } else if (key === 'sortDirection') {
      newState.sortDirection = value === 'desc' ? 'desc' : 'asc';
    } else if (key === 'q') {
      newState.searchTerm = value;
    } else {
      newState.filters[key] = value.split(',');
    }
  });
  return newState;
}

export async function preloadCategory() {
  const plpBlock = document.querySelector('.product-list-page');
  const { category } = readBlockConfig(plpBlock);
  const queryParams = parseQueryParams();

  window.loadCategoryPromise = loadCategory({
    pages: 1,
    currentPage: 1,
    category: {
      id: category,
    },
    currentPageSize: 10,
    type: 'category',
    sort: 'position',
    sortDirection: 'asc',
    ...queryParams,
  });
}
