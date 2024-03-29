import {
  h, Component, Fragment, render, createRef,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import ProductList from './ProductList.js';
import FacetList from './FacetList.js';
import { readBlockConfig } from '../../scripts/lib-franklin.js';
import { loadCategory, getProductRatings, parseQueryParams } from '../../scripts/commerce.js';

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

    const queryParams = parseQueryParams();

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

  loadProductRatings = async () => {
    const skus = this.state.products.items.map((product) => product.sku);
    const ratings = await getProductRatings(skus);

    const newProducts = this.state.products.items.map((p) => ({
      ...p,
      rating: {
        average: ratings[p.sku]?.average ?? 0,
        count: ratings[p.sku]?.count ?? 0,
      },
    }));

    this.setState({ products: { ...this.state.products, items: newProducts } });
  };

  loadProducts = async () => {
    this.setState({ loading: true });

    const state = await loadCategory(this.state);

    this.setState({
      ...state,
      loading: false,
    }, () => {
      this.loadProductRatings();
    });
  };

  componentDidMount() {
    if (window.loadCategoryPromise) {
      window.loadCategoryPromise.then((state) => {
        this.setState({
          ...state,
          loading: false,
        }, () => {
          this.loadProductRatings();
        });
      });
    } else {
      this.loadProducts();
    }
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
      onFilterChange=${(filters) => this.setState({ filters, currentPage: 1 })}
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
        onPageSizeChange=${(pageSize) => this.setState({ currentPageSize: pageSize, currentPage: 1 })} />
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
