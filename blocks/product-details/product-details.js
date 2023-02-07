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

async function enrichVariant(product, variantOptions) {
  product.enrichments = product.enrichments || {};

  // eslint-disable-next-line no-underscore-dangle
  if (product.enrichments[variantOptions.join('')]) {
    return product;
  }

  product.enrichments[variantOptions.join('')] = await performGraphqlQuery(
    enrichmentQuery,
    {
      sku: '07959',
      variantIds: variantOptions,
    },
  );
  return product;
}

async function performRequest() {
  // TODO start data loading before loading preact if possible
  const productData = await performGraphqlQuery(productQuery, { sku: '07959' });

  console.log(productData.products[0]);

  if (!productData?.products?.[0]) {
    return null;
  }

  const product = productData?.products?.[0];

  await enrichVariant(product, [
    'Y29uZmlndXJhYmxlLzU1MC8zMDk0',
    'Y29uZmlndXJhYmxlLzI4MC80Mw==',
    'Y29uZmlndXJhYmxlLzU1OS8zMTQ1']);

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

  async loadData() {
    // TODO error handling
    this.setState({ loading: false });
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

    console.log(this.state.product);

    return html`
  <${Fragment} >
      <${Carousel} />
      <${Sidebar} product=${this.state.product} />
      <div class="product-detail-description">
          <h3>PRODUCT DETAILS</h3>
          <div dangerouslySetInnerHTML=${{ __html: this.state.product.description }}></div>
      </div>
  </>`;
  }
}

async function dataOrLoading(timeout) {
  const dataPromise = performRequest();

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

  // if data is loaded within 50ms, don't show loading effect
  const result = await dataOrLoading(350);

  const app = html`<${ProductDetailPage} productPromise=${result} />`;

  render(app, $block);
}
