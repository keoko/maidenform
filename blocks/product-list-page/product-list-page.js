import {
  h, Component, Fragment, render, createRef,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import ProductList from './ProductList.js';
import FacetList from './FacetList.js';

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
    { label: 'Product Name', value: 'name' },
    { label: 'Relevance', value: 'relevance' },
  ];

  const currentSort = options.find((option) => option.value === props.currentSort) || options[3];

  return html`<div class="sort" disabled=${props.disabled}>
    <button disabled=${props.disabled}>Sort By: ${currentSort.label}</button>
    <div class="overlay" ref=${props.sortMenuRef}>
      <button class="close" onClick=${() => props.sortMenuRef.current.classList.toggle('active')}>Close</button>
      <ul>
        ${options.map((option) => html`<li>
          <a href="#" class="${currentSort.value === option.value ? 'active' : ''}" onClick=${(e) => {
  props.sortMenuRef.current.classList.toggle('active');
  props.onSort?.(option.value);
  e.preventDefault();
}}>${option.label}</a>
        </li>`)}
      </ul>
    </div>
  </div>`;
}

class ProductListPage extends Component {
  constructor() {
    super();

    this.facetMenuRef = createRef();
    this.sortMenuRef = createRef();

    const queryParams = ProductListPage.parseQueryParams();

    this.state = {
      loading: true,
      pages: 3,
      category: {
        // Get from H1
        name: document.querySelector('.default-content-wrapper > h1').innerText,
      },
      sort: false,
      products: {
        items: [{
          sku: 'a22601',
          url_key: 'a22601',
          name: 'Comfy Cabin Thermal Holiday Pajama Set',
          image: 'https://cdn.maidenform.com/catalog/product/H/N/HNS_M21405/HNS_M21405_BabyBlueStripe_Front.jpg',
          rating: {
            average: 4.5,
            count: 50,
          },
          price: {
            regular: 48.00,
            sale: 20.00,
          },
          swatches: [
            {
              image: 'https://swatches.maidenform.com/HNS_A22601/HNS_A22601_ClassicRedPlaid_sw.jpg',
              name: 'Classic Red Plaid',
              value: 'red-plaid',
            },
            {
              image: 'https://swatches.maidenform.com/HNS_A22601/HNS_A22601_MerlotFairisle_sw.jpg',
              name: 'Merlot Fairisle',
              value: 'merlot-fairisle',
            },
            {
              image: 'https://swatches.maidenform.com/HNS_A22601/HNS_A22601_RedAndGreenTreeFairisle_sw.jpg',
              name: 'Red And Green Tree Fairisle',
              value: 'red-and-green-tree-fairisle',
            },
            {
              image: 'https://swatches.maidenform.com/HNS_A22601/HNS_A22601_SpruceGreenDot_sw.jpg',
              name: 'Spruce Green Dot',
              value: 'spruce-green-dot',
            },
          ],
        },
        ...Array(9).fill({
          sku: 'a22601',
          url_key: 'a22601',
          name: 'Comfy Cabin Thermal Holiday Pajama Set',
          image: 'https://cdn.maidenform.com/catalog/product/H/N/HNS_M21405/HNS_M21405_BabyBlueStripe_Front.jpg',
          rating: {
            average: 4.5,
            count: 50,
          },
          price: {
            regular: 48.00,
            sale: 20.00,
          },
          swatches: [
            {
              image: 'https://swatches.maidenform.com/HNS_A22601/HNS_A22601_ClassicRedPlaid_sw.jpg',
              name: 'Classic Red Plaid',
              value: 'red-plaid',
            },
            {
              image: 'https://swatches.maidenform.com/HNS_A22601/HNS_A22601_MerlotFairisle_sw.jpg',
              name: 'Merlot Fairisle',
              value: 'merlot-fairisle',
            },
            {
              image: 'https://swatches.maidenform.com/HNS_A22601/HNS_A22601_RedAndGreenTreeFairisle_sw.jpg',
              name: 'Red And Green Tree Fairisle',
              value: 'red-and-green-tree-fairisle',
            },
            {
              image: 'https://swatches.maidenform.com/HNS_A22601/HNS_A22601_SpruceGreenDot_sw.jpg',
              name: 'Spruce Green Dot',
              value: 'spruce-green-dot',
            },
            {
              image: 'https://swatches.maidenform.com/HNS_A22601/HNS_A22601_ClassicRedPlaid_sw.jpg',
              name: 'Classic Red Plaid',
              value: 'red-plaid-1',
            },
            {
              image: 'https://swatches.maidenform.com/HNS_A22601/HNS_A22601_MerlotFairisle_sw.jpg',
              name: 'Merlot Fairisle',
              value: 'merlot-fairisle-1',
            },
            {
              image: 'https://swatches.maidenform.com/HNS_A22601/HNS_A22601_RedAndGreenTreeFairisle_sw.jpg',
              name: 'Red And Green Tree Fairisle',
              value: 'red-and-green-tree-fairisle-1',
            },
            {
              image: 'https://swatches.maidenform.com/HNS_A22601/HNS_A22601_SpruceGreenDot_sw.jpg',
              name: 'Spruce Green Dot',
              value: 'spruce-green-dot-1',
            },
          ],
        })],
        total: 10,
      },
      filters: {},
      facets: [{
        name: 'Sleep/Loungewear type',
        id: 'sleep',
        type: 'radio',
        options: [
          { name: 'Tops', count: 12, value: 'tops' },
          { name: 'Pajamas', count: 12, value: 'pajamas' },
          { name: 'Pants', count: 12, value: 'pants' },
          { name: 'Shorts', count: 12, value: 'shorts' },
        ],
      },
      {
        name: 'Size',
        id: 'size',
        type: 'swatch',
        options: [
          { name: 'S', value: 's' },
          { name: 'M', value: 'm' },
          { name: 'L', value: 'l' },
          { name: 'XL', value: 'xl' },
          { name: '1X', value: '1x' },
        ],
      },
      {
        name: 'Price',
        id: 'price',
        type: 'checkbox',
        options: [
          { name: 'up to $10', value: '0-10', count: 12 },
          { name: '$10 to $20', value: '10-20', count: 12 },
          { name: '$20 to $30', value: '20-30', count: 12 },
          { name: 'more than $30', value: '30', count: 12 },
        ],
      },
      {
        name: 'Color',
        id: 'color',
        type: 'swatch',
        options: [
          { name: 'black', value: 'black', color: 'black' },
          { name: 'white', value: 'white', color: 'white' },
          { name: 'red', value: 'red', color: 'red' },
          { name: 'blue', value: 'blue', color: 'blue' },
          { name: 'green', value: 'green', color: 'green' },
          { name: 'yellow', value: 'yellow', color: 'yellow' },
          { name: 'orange', value: 'orange', color: 'orange' },
          { name: 'purple', value: 'purple', color: 'purple' },
        ],
      }],
      ...queryParams,
    };
  }

  static parseQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    const newState = {
      currentPage: 1,
      currentPageSize: 10,
      sort: false,
      filters: {},
    };
    params.forEach((value, key) => {
      if (key === 'page') {
        newState.currentPage = parseInt(value, 10) || 1;
      } else if (key === 'pageSize') {
        newState.currentPageSize = parseInt(value, 10) || 10;
      } else if (key === 'sort') {
        newState.sort = value;
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

  loadProducts = async () => {
    // TODO
    this.setState({ loading: true });

    console.log('This should trigger a query', this.state);

    setTimeout(() => {
      this.setState({ loading: false });
    }, 200);
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
      ...this.state.filters,
    });

    // Load new products if filters, pagination or sort have changed
    const diff = Object.keys(Object.keys(prevState).reduce((acc, key) => {
      if (prevState[key] !== this.state[key]) {
        acc[key] = this.state[key];
      }
      return acc;
    }, {}));

    const keysToCheck = ['filters', 'sort', 'currentPageSize', 'currentPage'];
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
          onSort=${(sort) => this.setState({ sort })}
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
  block.textContent = '';

  const app = html`<${ProductListPage} />`;
  render(app, block);
}
