import {
  h, render, Fragment, Component,
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

class ProductDetailPage extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async loadData() {
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
      const productData = await response.json();
      this.setState({ productData });
      console.log(productData)
    }
    // TODO error handling
    this.setState({ loading: false });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
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

export default function decorate($block) {
  $block.innerHTML = '';
  const app = html`<${ProductDetailPage} />`;

  render(app, $block);
}
