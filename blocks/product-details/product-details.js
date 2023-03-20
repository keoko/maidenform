import {
  Component, Fragment, h, render,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import Carousel from './ProductDetailsCarousel.js';
import Sidebar from './ProductDetailsSidebar.js';
// Import here to preload script
// eslint-disable-next-line no-unused-vars
import Icon from './Icon.js';
import ProductDetailsShimmer from './ProductDetailsShimmer.js';
import {
  getSkuFromUrl,
  getUrlKeyFromUrl,
  getProductRatings,
  refineProductQuery,
  productStockQuery,
  performCatalogServiceQuery,
  performMonolithGraphQLQuery,
  getProduct,
} from '../../scripts/commerce.js';

const html = htm.bind(h);

export function errorGettingProduct(code = 404) {
  fetch(`/${code}.html`).then((response) => {
    if (response.ok) {
      return response.text();
    }
    throw new Error(`Error getting ${code} page`);
  }).then((htmlText) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    document.body.innerHTML = doc.body.innerHTML;
    document.head.innerHTML = doc.head.innerHTML;
  });
  document.body.innerHTML = '';
}

async function getVariantDetails(variantIds, sku) {
  const result = await performCatalogServiceQuery(
    refineProductQuery,
    {
      sku,
      variantIds,
    },
  );
  return {
    images: result.refineProduct?.images,
    price: result.refineProduct?.price,
  };
}

class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.onAddToCart = this.onAddToCart.bind(this);
    this.onQuantityChanged = this.onQuantityChanged.bind(this);
    this.getInStockProducts = this.getInStockProducts.bind(this);
  }

  // Returns a map. Keys to the map are option type ids. Values are arrays of in-stock variant ids,
  // given the other options that are selected.
  async getInStockProducts() {
    const result = await performMonolithGraphQLQuery(productStockQuery, {
      urlKey: getUrlKeyFromUrl(),
    });
    const product = result?.products?.items?.[0];

    if (!product) {
      errorGettingProduct(500);
      return {};
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

  async componentDidMount() {
    const product = await getProduct(getSkuFromUrl());

    if (!product) {
      errorGettingProduct();
    }

    const selection = {
      color: product.options
        .find((option) => option.id === 'color')
        .values.sort((a, b) => (a.title < b.title ? -1 : 1))[0],
    };

    this.setState({
      product,
      loading: false,
      selection,
    });

    this.getInStockProducts().then((result) => this.setState({ inStockVariants: result }));
    getProductRatings(getSkuFromUrl()).then((result) => {
      this.setState((oldState) => ({ product: { ...oldState.product, reviewStats: result } }));
    });
    const variantIds = Object.values(selection)
      .map((s) => s.id);
    getVariantDetails(variantIds, getSkuFromUrl()).then(({ images, price }) => {
      this.setState((oldState) => ({
        product: {
          ...oldState.product,
          productImages: [...oldState.product.productImages, ...images],
          price,
        },
      }));
    });
  }

  onAddToCart = () => {
    if (Object.keys(this.state.selection).length === this.state.product.options.length) {
      const optionsUIDs = Object.values(this.state.selection).map((option) => option.id);
      console.log({
        sku: getSkuFromUrl(), optionsUIDs, quantity: this.state.selectedQuantity ?? 1,
      });
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

    // fetch new images and prices
    const variantIds = Object.values({ ...this.state.selection, ...fragment })
      .map((selection) => selection.id);
    getVariantDetails(variantIds, getSkuFromUrl()).then(({ images, price }) => {
      this.setState((oldState) => ({
        product: {
          ...oldState.product,
          productImages: images,
          price,
        },
      }));
    });
  };

  render() {
    if (this.state.loading) {
      return html`<${ProductDetailsShimmer} />`;
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
      <//>
    `;
  }
}

export default async function decorate($block) {
  $block.innerHTML = '<div class="full-height"></div>';

  const sku = getSkuFromUrl();
  if (!sku) {
    errorGettingProduct();
  }

  const app = html`<${ProductDetailPage} sku=${sku} />`;

  render(app, $block);

  import('../../scripts/mse-utils.js').then((module) => {
    module.setPage('Product');
  });
}
