import {
  Component, Fragment, h, render,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import Carousel from './ProductDetailsCarousel.js';
import Sidebar from './ProductDetailsSidebar.js';
import { getProductRatings } from '../../scripts/scripts.js';
import {
  enrichmentQuery,
  performCatalogServiceQuery,
  performMonolithGraphQLQuery,
  productQuery,
  stockQuery,
} from './queries.js';

const html = htm.bind(h);

function getSku() {
  const path = window.location.pathname;
  const result = path.match(/\/products\/[\w|-]+\/([\w|-]+)$/);
  return result?.[1];
}

function getUrlKey() {
  const path = window.location.pathname;
  const result = path.match(/\/products\/([\w|-]+)\/[\w|-]+$/);
  return result?.[1];
}

export function errorGettingProduct() {
  fetch('/404.html').then((response) => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Error getting 404 page');
  }).then((htmlText) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    document.body.innerHTML = doc.body.innerHTML;
    document.head.innerHTML = doc.head.innerHTML;
  });
  document.body.innerHTML = '';
}

async function getProductImages(color, sku) {
  const result = await performCatalogServiceQuery(
    enrichmentQuery,
    {
      sku,
      variantIds: [color.id],
    },
  );
  return result.refineProduct?.images;
}

class ProductDetailPage extends Component {
  constructor({ sku }) {
    super();

    this.state = {
      sku,
      loading: true,
      selection: {},
      product: null,
    };
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.onAddToCart = this.onAddToCart.bind(this);
    this.onQuantityChanged = this.onQuantityChanged.bind(this);
    this.getInStockProducts = this.getInStockProducts.bind(this);
  }

  // Returns a map. Keys to the map are option type ids. Values are arrays of in-stock variant ids,
  // given the other options that are selected.
  async getInStockProducts() {
    const result = await performMonolithGraphQLQuery(stockQuery, { urlKey: getUrlKey() });
    const product = result?.products?.items?.[0];

    if (!product) {
      errorGettingProduct();
    }

    const inStockVariants = product.variants
      .map((variant) => variant.attributes
        .reduce((acc, curr) => ({ ...acc, [curr.code]: { label: curr.label, id: curr.uid } }), {}));

    // for each option, store the in-stock products given all the other options that are selected
    return this.state.product.options.reduce((acc, curOption) => {
      const inStockVariantsForOption = inStockVariants
        .filter((variant) => Object.keys(this.state.selection)
          .filter((selectionType) => selectionType !== curOption.id)
          .reduce((inStockSoFar, curr) => inStockSoFar
            && this.state.selection[curr].id === variant[curr].id, true));
      return {
        ...acc,
        [curOption.id]: [
          ...new Set(inStockVariantsForOption.map((variant) => variant[curOption.id].id))],
      };
    }, {});
  }

  getProduct = async () => {
    console.log('load product for ', this.state.sku);

    const productData = await performCatalogServiceQuery(productQuery, { sku: this.state.sku });

    // Render 404 if product cannot be found
    if (!productData?.products?.[0]) {
      this.setState({
        loading: false,
        product: null,
      });
    }

    const product = productData?.products?.[0];

    const getColor = async () => {
      const color = product.options?.find((option) => option.id === 'color')?.values?.[0];
      if (color) {
        product.productImages = await getProductImages(color, this.state.sku);
      }
    };

    const getRatings = async () => {
      product.reviewStats = await getProductRatings(this.state.sku);
    };
    await Promise.all([getColor(), getRatings()]);

    this.setState({
      loading: false,
      product,
      selection: {
        color: product.options.find((option) => option.id === 'color').values[0],
      },
    });
  };

  componentDidMount() {
    (async () => {
      // Load product
      await this.getProduct();

      // Afterwards load stock status
      this.getInStockProducts().then((result) => this.setState({ inStockVariants: result }));
    })();
  }

  onAddToCart = () => {
    if (Object.keys(this.state.selection).length === this.state.product.options.length) {
      const optionsUIDs = Object.values(this.state.selection).map((option) => option.id);
      console.log({ sku: getSku(), optionsUIDs, quantity: this.state.selectedQuantity ?? 1 });
    }
  };

  onQuantityChanged = (quantity) => {
    this.setState({ selectedQuantity: quantity });
  };

  onSelectionChanged = (fragment) => {
    // update selection value
    this.setState((oldState) => ({
      selection: {
        ...oldState.selection,
        ...fragment,
      },
    }));

    this.getInStockProducts().then((result) => this.setState({ inStockVariants: result }));

    // fetch new images if color changed
    if (fragment.color) {
      getProductImages(fragment.color, getSku()).then((newImages) => {
        this.setState((oldState) => ({
          product: {
            ...oldState.product,
            productImages: newImages,
          },
        }));
      });
    }
  };

  render() {
    if (this.state.loading) {
      return html`<${Fragment}>
          <${Carousel} shimmer />
          <${Sidebar} shimmer />
          <div class="detail-shimmer shimmer mobile-hidden"></div>
        </${Fragment}>`;
    }

    if (!this.state.product) {
      errorGettingProduct();
    }

    return html`
      <${Fragment} >
          <${Carousel} product=${this.state.product} />
          <${Sidebar}
            product=${this.state.product}
            selection=${this.state.selection}
            onSelectionChanged=${this.onSelectionChanged}
            onAddToCart=${this.onAddToCart}
            onQuantityChanged=${this.onQuantityChanged}
            inStockVariants=${this.state.inStockVariants}
          />
          <div class="product-detail-description">
              <h3>PRODUCT DETAILS</h3>
              <div dangerouslySetInnerHTML=${{ __html: this.state.product.description }}></div>
          </div>
      </>
    `;
  }
}

export default function decorate($block) {
  $block.textContent = '';

  const sku = getSku();
  if (!sku) {
    errorGettingProduct();
  }

  const app = html`<${ProductDetailPage} sku=${sku} />`;
  render(app, $block);
}
