import {
  Component, Fragment, h, render,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import Carousel from './ProductDetailsCarousel.js';
import Sidebar from './ProductDetailsSidebar.js';
import ProductDetailsShimmer from './ProductDetailsShimmer.js';

const html = htm.bind(h);

const query = `
{
  products(skus:["09436"]) {
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

async function performRequest() {
  // TODO start data loading before loading preact if possible
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
    body: JSON.stringify({ query }),
  });

  if (response.ok) {
    return response.json();
  }
  return null;
}

class ProductDetailPage extends Component {
  constructor(props) {
    super();

    if (props.data.needAwait) {
      this.state = { loading: true, promise: props.data.promise };
    } else {
      this.state = { loading: false, data: props.data.data };
    }
  }

  async loadData() {
    // TODO error handling
    this.setState({ loading: false });
  }

  componentDidMount() {
    if (this.state.promise) {
      this.state.promise.then((data) => {
        this.setState({ loading: false, data });
      });
    }
  }

  render() {
    console.log(this.state.data)

    if (this.state.loading) {
      return html`<${ProductDetailsShimmer} />`;
    }

    return html`
  <${Fragment} >
      <${Carousel} />
      <${Sidebar} />
      <div class="product-detail-description">
          <h3>PRODUCT DETAILS</h3>
          <p>
              Cushioned wire for all-day comfort.
          <ul><li>Full-coverage cups</li><li>Super-soft fabric</li><li>Lightly lined, cloud-foam cups</li><li>Side and back smoothing</li><li>Comfort Devotion® collection</li></ul>
          </p>
      </div>
  </>`;
  }
}

async function dataOrLoading(timeout) {
  const dataPromise = performRequest();

  return Promise.any([
    new Promise((res) => {
      dataPromise.then((data) => res({ needAwait: false, data }));
    }),
    new Promise((res) => {
      setTimeout(() => res({ needAwait: true, promise: dataPromise }), timeout);
    }),
  ]);
}

export default async function decorate($block) {
  $block.innerHTML = '';

  // if data is loaded within 50ms, don't show loading effect
  const result = await dataOrLoading(50);

  const app = html`<${ProductDetailPage} data=${result} />`;

  render(app, $block);
}
