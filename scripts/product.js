import { getConfigValue } from './configs.js';

export async function getProductRatings(productSkus) {
  const skusString = typeof productSkus === 'object' ? productSkus.join(',') : productSkus;

  const searchParams = new URLSearchParams({
    apiversion: '5.4',
    passkey: await getConfigValue('bazaarvoice-passkey'),
    Filter: `ProductId:${skusString}`,
    Stats: 'Reviews',
  });
  const endpoint = await getConfigValue('bazaarvoice-endpoint');
  const response = await fetch(`${endpoint}/data/statistics.json?${searchParams.toString()}`);
  if (response.ok) {
    const body = await response.json();
    if (body?.Results?.length === 1) {
      return {
        average: body.Results[0].ProductStatistics.ReviewStatistics?.AverageOverallRating,
        count: body.Results[0].ProductStatistics.ReviewStatistics?.TotalReviewCount,
      };
    }
    return body?.Results?.map(
      (product) => ({
        average: product.ProductStatistics.ReviewStatistics?.AverageOverallRating,
        count: product.ProductStatistics.ReviewStatistics?.TotalReviewCount,
      }),
    );
  }
  return { average: null, count: null };
}

export const enrichmentQuery = `
query EnrichmentQuery($sku: String!, $variantIds: [String!]!) {
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
}
`;

export const stockQuery = `
query StockQuery($urlKey: String!) {
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
}
`;

export const productQuery = `
query ProductQuery($sku: String!) {
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

fragment priceFields on ProductViewPrice {
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
}
`;

export function getSku() {
  const path = window.location.pathname;
  const result = path.match(/\/products\/[\w|-]+\/([\w|-]+)$/);
  return result?.[1];
}

export function getUrlKey() {
  const path = window.location.pathname;
  const result = path.match(/\/products\/([\w|-]+)\/[\w|-]+$/);
  return result?.[1];
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

  const params = new URLSearchParams({
    query: query.replaceAll(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' '),
    variables: variables ? JSON.stringify(variables) : null,
  });

  const response = await fetch(`https://franklin.maidenform.com/cs-graphql-sandbox?${params}`, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    return null;
  }

  const productData = await response.json();

  return productData.data;
}

const preloadedImages = new Set();
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
  return preloadImage(`${window.origin}/product-images/${getSku().toLowerCase()}.jpg`);
}

export async function getProduct(sku) {
  const productDataPromise = performCatalogServiceQuery(productQuery, { sku });

  return productDataPromise.then((productData) => {
    if (!productData?.products?.[0]) {
      return null;
    }

    const product = productData?.products?.[0];

    product.productImages = [{ url: `${window.origin}/product-images/${getSku().toLowerCase()}.jpg` }];

    return product;
  });
}
