import {
  h, Component, Fragment, render, createRef,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import ProductList from './ProductList.js';
import FacetList from './FacetList.js';
import { readBlockConfig } from '../../scripts/lib-franklin.js';
import { getSwatchImageUrl } from '../../scripts/commerce.js';

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
  const options = [
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Product Name', value: 'name-asc' },
    { label: 'Relevance', value: 'relevance-asc' },
  ];

  const currentSort = options.find((option) => option.value === `${props.currentSort}-${props.sortDirection}`) || options[3];

  return html`<div class="sort" disabled=${props.disabled}>
    <button disabled=${props.disabled}>Sort By: ${currentSort.label}</button>
    <div class="overlay" ref=${props.sortMenuRef}>
      <button class="close" onClick=${() => props.sortMenuRef.current.classList.toggle('active')}>Close</button>
      <ul>
        ${options.map((option) => html`<li>
          <a href="#" class="${currentSort.value === option.value ? 'active' : ''}" onClick=${(e) => {
  props.sortMenuRef.current.classList.toggle('active');
  const [sort, direction = 'asc'] = option.value.split('-');
  props.onSort?.(sort, direction);
  e.preventDefault();
}}>${option.label}</a>
        </li>`)}
      </ul>
    </div>
  </div>`;
}

const facetTypeMapping = {
  custom_size: {
    type: 'swatch',
    style: 'facet-size',
  },
  custom_bandsize: {
    type: 'swatch',
    style: 'facet-size',
  },
  custom_color_family: {
    type: 'checkbox',
  },
  custom_cupsize: {
    type: 'swatch',
    style: 'facet-size',
  },
  custom_silhouette: {
    type: 'checkbox',
  },
  custom_strap_type: {
    type: 'checkbox',
  },
};

class ProductListPage extends Component {
  constructor({ type = 'category' }) {
    super();

    this.facetMenuRef = createRef();
    this.sortMenuRef = createRef();

    const queryParams = ProductListPage.parseQueryParams();

    let headline = 'Search Results';
    if (type === 'category') {
      // Get from H1
      headline = document.querySelector('.default-content-wrapper > h1')?.innerText;
    }

    this.state = {
      loading: true,
      pages: 1,
      type,
      category: {
        name: headline,
      },
      sort: 'featured',
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
      currentPage: 1,
      currentPageSize: 10,
      sort: 'featured',
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

  static mapProduct = (product) => {
    const price = {};
    if (product.price === product.final_price) {
      price.regular = parseFloat(product.price);
    } else {
      price.regular = parseFloat(product.price);
      price.sale = parseFloat(product.final_price);
    }

    const productUrl = new URL(product.url);
    const urlKey = productUrl.pathname.substring(1, productUrl.pathname.length - 5);

    const mappedProduct = {
      sku: product.parent_sku,
      url_key: urlKey,
      name: product.name,
      image: product.image_url,
      // TODO: Get ratings from Bazaarvoice
      rating: {
        average: 4.5,
        count: 50,
      },
      price,
      swatches: product.swatch.map((s) => ProductListPage.mapSwatch(product, s)),
    };
    return mappedProduct;
  };

  static mapFacetOption = ({ count, text, id }) => ({ name: text, count, value: id });

  static mapFacet = (id, facet) => {
    const { type, style } = facetTypeMapping[id] || { type: 'radio' };
    const mappedFacet = {
      name: facet.display_name,
      id,
      type,
      style,
      options: facet.value.map(ProductListPage.mapFacetOption),
    };
    return mappedFacet;
  };

  loadProducts = async () => {
    this.setState({ loading: true });

    if (this.state.type !== 'search' || !this.state.searchTerm) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 200);
      return;
    }

    const query = {
      context: {
        page: {
          uri: '/search',
          locale_country: 'us',
          locale_language: 'en',
        },
      },
      widget: {
        rfkid: 'rfkid_7',
      },
      query: {
        keyphrase: {
          value: [this.state.searchTerm],
        },
      },
      n_item: this.state.currentPageSize,
      page_number: this.state.currentPage,
      facet: {
        all: true,
        total: true,
      },
      sort: {
        value: [{
          name: this.state.sort,
          order: this.state.sortDirection,
        }],
      },
      content: {
        product: {},
      },
    };

    if (Object.keys(this.state.filters).length > 0) {
      query.filter = {};
      Object.keys(this.state.filters).forEach((key) => {
        query.filter[key] = { value: this.state.filters[key] };
      });
    }

    // TODO: Replace with stage endpoint, move config to Excel
    try {
      const url = new URL('https://maidenform.rfk.maidenform.com/api/search-rec/3');
      url.searchParams.append('data', JSON.stringify(query));
      const response = await fetch(url).then((res) => res.json());

      // Parse response into state
      this.setState({
        loading: false,
        pages: Math.max(response.total_page, 1),
        products: {
          items: response.content.product.value.map(ProductListPage.mapProduct),
          total: response.total_item,
        },
        facets: Object.keys(response.facet || {})
          .map((id) => ProductListPage.mapFacet(id, response.facet[id])),
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

  render(_, state) {
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
