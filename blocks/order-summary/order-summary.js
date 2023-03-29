/* eslint-disable max-len, no-unsafe-optional-chaining */
import {
  h, Component, render, Fragment,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import { store } from '../../scripts/cart/init-cart.js';
import { getCart } from '../../scripts/cart/api.js';

const html = htm.bind(h);

class OrderSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      cart: {},
    };
    this.formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  componentDidMount() {
    this.broadcastChannel = new BroadcastChannel('ElsieSDK/EventBus');

    this.broadcastChannel.addEventListener('message', (msg) => {
      (async () => {
        console.debug('received message, trigger getCart', msg);
        await getCart();
      })();
    });

    store.subscribe((cart) => {
      this.setState({ cart, loading: false });
    });
  }

  componentWillUnmount() {
    this.broadcastChannel.close();
  }

  render() {
    const { cart, loading } = this.state;

    if (loading) {
      return html`<div class="loading">Loading...</div>`;
    }

    const hasTaxes = cart.prices?.applied_taxes?.length > 0;
    const taxes = cart.prices?.applied_taxes.reduce((acc, tax) => acc + tax.amount.value, 0);
    const hasShipping = cart.shipping_addresses?.length > 0 && cart.shipping_addresses[0].selected_shipping_method;
    const shipping = cart.shipping_addresses?.reduce((acc, address) => acc + address.selected_shipping_method?.amount.value, 0) || 0;
    const shippingLabel = cart.shipping_addresses[0]?.selected_shipping_method?.method_title;

    console.log('cart', this.state);
    return html`<div>
      <div class="heading">Order Summary</div>
      <div class="promo-code">
        <div class="promo-code-heading">Use Promo Code</div>
        <div class="promo-code-form">
          <input type="text" name="promo-code" placeholder="Enter your code" />
          <button>APPLY PROMO</button>
        </div>
      </div>
      <div class="prices">
        <div>Item Subtotal (${cart.total_quantity})</div>
        <div>${this.formatter.format(cart.prices.subtotal_excluding_tax.value)}</div>
        ${cart.prices.discounts?.map((discount) => html`<${Fragment}>
          <div class="discount-label">${discount.label}</div>
          <div class="discount-price">${this.formatter.format(-discount.amount.value)}</div>
        </>`)}
        ${hasShipping && html`<div>
          Shipping
          ${shippingLabel && html`<div class="shipping-label">- ${shippingLabel}</div>`}
        </div>
        <div>${this.formatter.format(shipping)}</div>`}
        <div>Estimated Tax</div>
        <div>${hasTaxes ? this.formatter.format(taxes) : 'TBD'}</div>
        <div class="order-total-label">Order Total</div>
        <div class="order-total">${this.formatter.format(cart.prices.grand_total.value)}</div>
    </div>
    </div>`;
  }
}

export default function decorate(block) {
  block.textContent = '';
  const app = html`<${OrderSummary} />`;
  render(app, block);
}
