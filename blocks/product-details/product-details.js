import {
  Component, Fragment, h, render,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import Carousel from './ProductDetailsCarousel.js';
import Sidebar from './ProductDetailsSidebar.js';
import ProductDetailsShimmer from './ProductDetailsShimmer.js';

const html = htm.bind(h);

const enrichmentQuery = `
query EnrichmentQuery {
  refineProduct(
    sku: "07959",
    optionIds: ["Y29uZmlndXJhYmxlLzU1MC8zMDk0", "Y29uZmlndXJhYmxlLzI4MC80Mw==", "Y29uZmlndXJhYmxlLzU1OS8zMTQ1"]
  ) {
    images(roles: []) {
      url
      roles
      label
    }
  }
}
`;

const productQuery = `
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
        minimum {
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
    }
  }
}
`;

function getSku() {
  const path = window.location.pathname;
  const result = path.match(/\/products\/[\w|-]+-([0-9]+)$/);
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

async function performGraphqlQuery(query, variables) {
  const headers = {
    'Content-Type': 'application/json',
    'Magento-Environment-Id': '271c8746-f2ed-43c3-8159-e7b7bbe79aac',
    'Magento-Website-Code': 'maidenform',
    'Magento-Store-View-Code': 'maidenform_store_view',
    'Magento-Store-Code': 'maidenform_store',
    'Magento-Customer-Group': '77de68daecd823babbb58edb1c8e14d7106e83bb',
    'x-api-key': '070cb248e40b4f20b72836d1cd1dbbaf',
  };

  const response = await fetch('https://catalog-service-sandbox.adobe.io/graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    return null;
  }

  const productData = await response.json();

  return productData.data;
}

async function enrichVariant(product, sku, variantOptions) {
  product.enrichments = product.enrichments || {};

  // eslint-disable-next-line no-underscore-dangle
  if (product.enrichments[variantOptions.join('')]) {
    return product;
  }

  product.enrichments[variantOptions.join('')] = await performGraphqlQuery(
    enrichmentQuery,
    {
      sku,
      variantIds: variantOptions,
    },
  );
  return product;
}

async function performRequest(sku) {
  // TODO start data loading before loading preact if possible
  const productData = await performGraphqlQuery(productQuery, { sku });

  if (!productData?.products?.[0]) {
    return null;
  }

  const product = productData?.products?.[0];

  // extract the first product
  if (product && product.options[0]?.values[0]) {
    const variants = product.options.map((option) => option.values[0].id);
    await enrichVariant(product, sku, variants);
  }

  return product;
}

class ProductDetailPage extends Component {
  constructor(props) {
    super();

    if (props.productPromise.needAwait) {
      this.state = { loading: true, promise: props.productPromise.promise };
    } else {
      this.state = { loading: false, product: props.productPromise.product };
    }
  }

  componentDidMount() {
    if (this.state.promise) {
      this.state.promise.then((data) => {
        this.setState({ loading: false, product: data });
      });
    }
  }

  render() {
    if (this.state.loading) {
      return html`<${ProductDetailsShimmer} />`;
    }

    if (!this.state.product) {
      errorGettingProduct();
    }

    return html`
      <${Fragment} >
          <${Carousel} />
          <${Sidebar} product=${this.state.product} />
          <div class="product-detail-description">
              <h3>PRODUCT DETAILS</h3>
              <div dangerouslySetInnerHTML=${{ __html: this.state.product.description }}></div>
          </div>
      </>
    `;
  }
}

async function dataOrLoading(sku, timeout) {
  const dataPromise = performRequest(sku);

  return Promise.any([
    new Promise((res) => {
      dataPromise.then((data) => res({ needAwait: false, product: data }));
    }),
    new Promise((res) => {
      setTimeout(() => res({ needAwait: true, promise: dataPromise }), timeout);
    }),
  ]);
}

export default async function decorate($block) {
  $block.innerHTML = '';

  const sku = getSku();
  if (!sku) {
    errorGettingProduct();
  }

  // if data is loaded within 350ms, don't show loading effect
  const result = await dataOrLoading(sku, 350);

  const app = html`<${ProductDetailPage} productPromise=${result} sku=${sku} />`;

  render(app, $block);
}
