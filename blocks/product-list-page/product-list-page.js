import {
  h, Component, Fragment, render, createRef,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import query from './productSearch.graphql.js';
import ProductList from './ProductList.js';
import FacetList from './FacetList.js';
import { readBlockConfig } from '../../scripts/lib-franklin.js';
import { getProductRatings, getSwatchImageUrl } from '../../scripts/commerce.js';

const endpoint = 'https://catalog-service-sandbox.adobe.io/graphql';

const headers = {
  'Content-Type': 'application/json',
  'Magento-Environment-Id': '271c8746-f2ed-43c3-8159-e7b7bbe79aac',
  'Magento-Website-Code': 'maidenform',
  'Magento-Store-View-Code': 'maidenform_store_view',
  'Magento-Store-Code': 'maidenform_store',
  'Magento-Customer-Group': '77de68daecd823babbb58edb1c8e14d7106e83bb',
  'x-api-key': 'maidenform-franklin',
};

const html = htm.bind(h);

function Pagination(props) {
  if (props.loading) {
    return html`<div class="pagination shimmer"></div>`;
  }

  return html`<div class="pagination">
    <div>
      <label for="select-pagesize">Show:</label>
      <select id="select-pagesize" name="pageSize" value=${props.currentPageSize} onChange=${(e) => props.onPageSizeChange?.(parseInt(e.target.value, 10))}>
        ${props.pageSizeOptions.map((size) => html`<option value=${size}>${size} Items</option>`)}
      </select>
    </div>
    <div>
      <label for="select-page">Page:</label>
      <select id="select-page" name="page" value=${props.currentPage} onChange=${(e) => props.onPageChange?.(parseInt(e.target.value, 10))}>
        ${Array(props.pages).fill(0).map((_, i) => html`<option value=${i + 1}>${i + 1}</option>`)}
      </select>
      <span>of ${props.pages}</span>
    </div>
    <div>
      ${props.currentPage > 1 ? html`<button class="previous" onClick=${() => props.onPageChange?.(props.currentPage - 1)}>Previous</button>` : ''}
      ${props.currentPage < props.pages ? html`<button class="next" onClick=${() => props.onPageChange?.(props.currentPage + 1)}>Next</button>` : ''}
    </div>
  </div>`;
}

function Sort(props) {
  const {
    type, disabled, sortMenuRef, onSort,
  } = props;
  const options = [
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Product Name', value: 'name-asc' },
    { label: 'Relevance', value: type === 'category' ? 'position-asc' : 'relevance-asc' },
  ];

  const currentSort = options.find((option) => option.value === `${props.currentSort}-${props.sortDirection}`) || options[3];

  return html`<div class="sort" disabled=${disabled}>
    <button disabled=${disabled}>Sort By: ${currentSort.label}</button>
    <div class="overlay" ref=${sortMenuRef}>
      <button class="close" onClick=${() => sortMenuRef.current.classList.toggle('active')}>Close</button>
      <ul>
        ${options.map((option) => html`<li>
          <a href="#" class="${currentSort.value === option.value ? 'active' : ''}" onClick=${(e) => {
  sortMenuRef.current.classList.toggle('active');
  const [sort, direction = 'asc'] = option.value.split('-');
  onSort?.(sort, direction);
  e.preventDefault();
}}>${option.label}</a>
        </li>`)}
      </ul>
    </div>
  </div>`;
}

class ProductListPage extends Component {
  constructor(props) {
    const { type = 'category', category } = props;
    super();

    this.facetMenuRef = createRef();
    this.sortMenuRef = createRef();

    const queryParams = ProductListPage.parseQueryParams();

    let headline = 'Search Results';
    let sort = 'relevance';
    if (type === 'category') {
      // Get from H1
      headline = document.querySelector('.default-content-wrapper > h1')?.innerText;
      sort = 'position';
    }

    this.state = {
      loading: true,
      pages: 1,
      currentPage: 1,
      currentPageSize: 10,
      type,
      category: {
        name: headline,
        id: category || null,
      },
      sort,
      sortDirection: 'asc',
      products: {
        items: [],
        total: 0,
      },
      filters: {},
      facets: [],
      ...queryParams,
    };
  }

  static parseQueryParams = () => {
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
  };

  static updateQueryParams = (params) => {
    const newParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (Array.isArray(params[key]) && params[key].length > 0) {
        newParams.set(key, params[key].join(','));
      } else if (!Array.isArray(params[key]) && params[key]) {
        newParams.set(key, params[key]);
      }
    });
    window.history.pushState({}, '', `${window.location.pathname}?${newParams.toString()}`);
  };

  static mapSwatch = (product, swatch) => ({
    image: getSwatchImageUrl(product.parent_sku, swatch),
    product_image: swatch.sku_image_url,
    name: swatch.custom_color,
    value: swatch.custom_color,
  });

  static getColorSwatchesForProduct = (colorOption, images, sku) => (
    colorOption ? colorOption.values : [])
    .map((v) => {
      const id = v.title.replace(/[^a-zA-Z0-9]/g, '');
      const productImage = images.find((i) => i.url.includes(`_${id}_`))?.url;

      let swatchImage = null;
      if (productImage) {
        const swatchUrl = new URL(productImage);
        swatchUrl.hostname = 'swatches.maidenform.com';
        swatchUrl.search = '';

        const filename = swatchUrl.pathname.split('/').pop();
        const prefix = filename.split('_')[0].toUpperCase();
        const extension = filename.split('.').pop();
        swatchUrl.pathname = `${prefix}_${sku}/${prefix}_${sku}_${id}_sw.${extension}`;
        swatchImage = swatchUrl.toString();
      }

      return {
        ...v,
        id,
        productImage,
        image: swatchImage,
      };
    })
    // Remove options without image
    .filter((v) => v.image);

  static mapProduct = (product, ratings) => {
    // Parse url_key from url
    const productUrl = new URL(product.url);
    const urlKey = productUrl.pathname.substring(1, productUrl.pathname.length - 5);

    const allImages = product.images
      // Filter out size charts
      .filter((image) => !image.roles.includes('hide_from_pdp'))
      // Remove duplicates
      .filter((image, index, self) => self.findIndex((i) => i.url === image.url) === index)
      // Fix wrong image URL
      .map((image) => ({
        ...image,
        url: image.url
          .replace('productH', 'product/H')
          .replace('productM', 'product/M'),
      }));

    // Find in product.options the object with title = Color
    const colorOption = product.options.find((option) => option.title === 'Color');
    const colorOptions = ProductListPage
      .getColorSwatchesForProduct(colorOption, allImages, product.sku);

    return {
      ...product,
      images: allImages.length > 0 ? [allImages[0]] : [],
      url_key: urlKey,
      swatches: colorOptions,
      rating: {
        average: ratings[product.sku]?.average ?? 0,
        count: ratings[product.sku]?.count ?? 0,
      },
    };
  };

  loadProducts = async () => {
    this.setState({ loading: true });

    try {
      // TODO: Be careful if query exceeds GET size limits, then switch to POST
      const variables = {
        pageSize: this.state.currentPageSize,
        currentPage: this.state.currentPage,
        sort: [{
          attribute: this.state.sort,
          direction: this.state.sortDirection === 'desc' ? 'DESC' : 'ASC',
        }],
      };

      if (this.state.type === 'search') {
        variables.phrase = this.state.searchTerm;
      }

      if (Object.keys(this.state.filters).length > 0) {
        variables.filter = [];
        Object.keys(this.state.filters).forEach((key) => {
          if (this.state.filters[key].length > 1) {
            variables.filter.push({ attribute: key, in: this.state.filters[key] });
          } else if (this.state.filters[key].length === 1) {
            variables.filter.push({ attribute: key, eq: this.state.filters[key][0] });
          }
        });
      }

      if (this.state.type === 'category' && this.state.category.id) {
        variables.filter = variables.filter || [];
        variables.filter.push({ attribute: 'categoryIds', eq: this.state.category.id });
      }

      const apiCall = new URL(endpoint);
      apiCall.searchParams.append('query', query);
      apiCall.searchParams.append('variables', JSON.stringify(variables));

      const response = await fetch(apiCall, {
        method: 'GET',
        headers,
      }).then((res) => res.json());

      // TODO: Ignore errors for now, since some are caused by products with
      // missing price information

      // get ratings
      const allSkus = response.data.productSearch.items
        .filter((product) => !!product.productView.sku)
        .map((product) => product.productView.sku);
      const ratings = await getProductRatings(allSkus);

      // Parse response into state
      this.setState({
        loading: false,
        pages: Math.max(response.data.productSearch.page_info.total_pages, 1),
        products: {
          items: response.data.productSearch.items
            .map((product) => ProductListPage.mapProduct(product.productView, ratings)),
          total: response.data.productSearch.total_count,
        },
        facets: response.data.productSearch.facets.filter((facet) => facet.attribute !== 'categories'),
      });
    } catch (e) {
      console.error('Error loading products', e);
      this.state = {
        loading: false,
        pages: 1,
        products: {
          items: [],
          total: 0,
        },
        facets: [],
      };
    }
  };

  componentDidMount() {
    this.loadProducts();
  }

  componentDidUpdate(_, prevState) {
    // Update URL
    ProductListPage.updateQueryParams({
      page: this.state.currentPage,
      pageSize: this.state.currentPageSize,
      sort: this.state.sort,
      sortDirection: this.state.sortDirection,
      q: this.state.searchTerm,
      ...this.state.filters,
    });

    // Load new products if filters, pagination or sort have changed
    const diff = Object.keys(Object.keys(prevState).reduce((acc, key) => {
      if (prevState[key] !== this.state[key]) {
        acc[key] = this.state[key];
      }
      return acc;
    }, {}));

    const keysToCheck = ['filters', 'sort', 'sortDirection', 'searchTerm', 'currentPageSize', 'currentPage'];
    if (keysToCheck.some((key) => diff.includes(key))) {
      this.loadProducts();
    }
  }

  render(props, state) {
    const { type = 'category' } = props;

    return html`<${Fragment}>
    <${FacetList} 
      facets=${state.facets}
      filters=${state.filters}
      facetMenuRef=${this.facetMenuRef}
      onFilterChange=${(filters) => this.setState({ filters })}
      loading=${state.loading} />
    <div class="products">
      <div class="title">
        <h1>${state.category.name}</h1>
        ${!state.loading && html`<span>(${state.products.total} ${state.products.total === 1 ? 'Product' : 'Products'})</span>`}
        <${Sort}
          disabled=${state.loading}
          currentSort=${state.sort}
          sortDirection=${state.sortDirection}
          type=${type}
          onSort=${(sort, direction) => this.setState({ sort, sortDirection: direction })}
          sortMenuRef=${this.sortMenuRef} />
      </div>
      <div class="mobile-menu">
        <button disabled=${state.loading} id="toggle-filters" onClick=${() => this.facetMenuRef.current.classList.toggle('active')}>Filters</button>
        <button disabled=${state.loading} id="toggle-sortby" onClick=${() => this.sortMenuRef.current.classList.toggle('active')}>Sort By</button>
      </div>
      <${ProductList} products=${state.products} loading=${state.loading} currentPageSize=${state.currentPageSize} />
      <${Pagination}
        pages=${state.pages}
        currentPage=${state.currentPage}
        pageSizeOptions=${[10, 20, 30, 40]}
        currentPageSize=${state.currentPageSize}
        loading=${state.loading}
        onPageChange=${(page) => this.setState({ currentPage: page })}
        onPageSizeChange=${(pageSize) => this.setState({ currentPageSize: pageSize })} />
    </div>
  </>`;
  }
}

export default function decorate(block) {
  const config = readBlockConfig(block);

  block.textContent = '';

  const app = html`<${ProductListPage} ...${config} />`;
  render(app, block);
}
