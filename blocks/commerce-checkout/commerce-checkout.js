import {
  h, render, createContext, Fragment,
} from '../../scripts/preact.js';
import { useState, useEffect, useContext } from '../../scripts/preact-hooks.js';
import htm from '../../scripts/htm.js';
import { CheckoutApi } from '../../scripts/commerce-checkout/containers/CheckoutApi.js';

const html = htm.bind(h);

const useCheckoutMFE = () => {
  const [internalMFEState, setInternalMFEState] = useState({});

  useEffect(() => {
    CheckoutApi.init({
      // endpoint: 'https://graph.adobe.io/api/e7c76861-4f68-45fc-b397-e642abe5da9a/graphql?api_key=efcac4a158e54ba399feda9441453b54',
      endpoint: 'https://franklin.maidenform.com/graphql',
      selectedStore: 'maidenform_store_view',
    });
    const id = CheckoutApi.observe((state) => setInternalMFEState(state));

    return () => {
      CheckoutApi.unobserve(id);
    };
  }, [CheckoutApi]);

  return internalMFEState;
};

const CheckoutContext = createContext();

function ShippingAddressForm() {
  const { context } = useContext(CheckoutContext);
  const { shippingAddress} = context;
  const [formState, setFormState] = useState({});
  
  // Initialize form state with shipping address if empty
  useEffect(() => {
    if (Object.keys(formState).length === 0) {
      setFormState(shippingAddress);
    }
  }, [shippingAddress]);

  const checkoutState = useContext(CheckoutContext);
  const { countries, regions } = checkoutState.context;

  useEffect(() => {
    // Initialize the selected country if a) the country is invalid or b) it is not set
    if (!countries?.find((country) => country.id === formState.country) || !formState.country) {
      setFormState((oldState) => ({ ...oldState, country: countries?.[0].id }));
      CheckoutApi.setShippingCountry(countries?.[0].id);
    }
  }, [countries]);

  useEffect(() => {
    if (regions && regions.length > 0) {
      // Initialize the selected region if a) the region is invalid or b) it is not set
      if (!regions?.find((region) => region.code === formState.region) || !formState.region) {
        setFormState((oldState) => ({ ...oldState, region: regions?.[0].code }));
      }
    }
  }, [regions]);

  const handleSetShippingAddress = (e) => {
    e.preventDefault();
    CheckoutApi.setShippingAddress(formState);
  };

  const useField = (name, type = 'text') => ({
    value: formState[name] || '',
    onChange: (e) => { 
      console.log('changing value ...', formState, e.target.value)
      setFormState((oldState) => ({
      ...oldState,
      [name]: e.target.value,
    }))
    },
    type,
    name,
  });

  const updateShippingRegion = (e) => {
    // CheckoutApi.setShippingRegion(e.target.value);
    setFormState((oldState) => ({ ...oldState, region: e.target.value }));
  };

  const updateShippingCountry = (e) => {
    CheckoutApi.setShippingCountry(e.target.value);
    setFormState((oldState) => ({ ...oldState, country: e.target.value }));
  };

  return html`
    <form>
      <span>Where should we send your order?</span>
      <input ...${useField('email')} autocomplete="email" placeholder="Email" />
      <input ...${useField('firstName')} autocomplete="given-name" placeholder="First Name" />
      <input ...${useField('lastName')} autocomplete="family-name" placeholder="Last Name" />
      <input ...${useField('streetAddress1')} autocomplete="address-line1" placeholder="Street Address 1" />
      <input ...${useField('streetAddress2')} autocomplete="address-line2" placeholder="Street Address 2" />
      <input ...${useField('city')} autocomplete="address-level2" placeholder="City" />
        <select name="region" onChange=${updateShippingRegion}>
            ${regions?.map((region) => html`
              <option value=${region.code}>${region.name}</option>
          `)}
        </select>
      <input ...${useField('zipCode')} autocomplete="postal-code" placeholder="Post Code" />
      <select name="country" onChange=${updateShippingCountry}>
          ${countries?.map((country) => html`
              <option value=${country.id}>${country.full_name_english}</option>
          `)}
      </select>
      <input ...${useField('phoneNumber')} placeholder="Phone Number" />
      <button class="button primary" onClick=${handleSetShippingAddress}>Set shipping address</button>
    </form>
  `;
}

function ShippingMethodForm() {
  const checkoutState = useContext(CheckoutContext);
  const { shippingMethods } = checkoutState.context;

  if (!shippingMethods) {
    return null;
  }

  const handleSetShippingMethod = (e) => {
    e.preventDefault();
    const selectedInputElement = e.target.closest('form').querySelector('input:checked');

    const carrierCode = selectedInputElement.getAttribute('data-carrier-code');
    const methodCode = selectedInputElement.getAttribute('data-method-code');
    CheckoutApi.selectShippingMethod({ carrierCode, methodCode });
  };

  return html`
    <form>
      <span>How would you like your order to be shipped?</span>
      <div class="shipping-method-selector">
        ${shippingMethods.map((method) => html`
            <input type="radio" 
                   name="shipping-method"
                   data-carrier-code=${method.carrier_code}
                   data-method-code=${method.method_code}
                   id=${`${method.carrier_code}-${method.method_code}`}
                   value=${`${method.carrier_code}-${method.method_code}`} />
            <label for=${`${method.carrier_code}-${method.method_code}`}>
              <span class="shipping-method-title">${method.method_title}</span>
              <span class="shipping-method-price">
                ${method.price_incl_tax.value} ${method.price_incl_tax.currency}
              </span>
            </label>
          `)}
      </div>
      <button class="button primary" onclick=${handleSetShippingMethod}>Set shipping method</button>
    </form>
  `;
}

function CheckoutStepWrapper({ title, children, active }) {
  return html`
    <div class="checkout-step-wrapper">
      <h2 class=${active ? 'title-active' : ''}>${title}</h2>
      <div class="shipping-address-content">
          ${children}
      </div>
    </div>
  `;
}

function ShippingStep({ active }) {
  const checkoutState = useContext(CheckoutContext);
  const { context } = checkoutState;
  const shippingAddress = context?.shippingAddress || {};
  return html`
      <${CheckoutStepWrapper} active=${active} title="STEP 1: Shipping information">
          ${active && html`
              <${ShippingAddressForm} />
              <hr />
              <${ShippingMethodForm} />
              <button class="button primary" onClick=${() => CheckoutApi.continueToPayment()}>Continue To Next Step</button>
          `}
          ${!active && Object.keys(shippingAddress).length > 0 && html`
            <div class="shipping-address-summary">
              <div>${shippingAddress.firstName} ${shippingAddress.lastName}</div>
              <div>${shippingAddress.streetAddress1} ${shippingAddress.streetAddress2}</div>
              <div>${shippingAddress.city}, ${shippingAddress.zipCode}</div>
              <div>${shippingAddress.country}</div>
            </div>              
          `}
      <//>
  `;
}

function PaymentMethodSelector() {
  const checkoutState = useContext(CheckoutContext);
  const { paymentMethods } = checkoutState.context;

  const handleSetPaymentMethod = (e) => {
    e.preventDefault();
    const selectedInputElement = e.target.closest('form').querySelector('input:checked');

    const methodTitle = selectedInputElement.getAttribute('data-method-title');
    const methodCode = selectedInputElement.getAttribute('data-method-code');
    CheckoutApi.selectPaymentMethod({ title: methodTitle, code: methodCode });
  };

  return html`
    <${Fragment}>
      <div class="payment-method-selector">
        ${paymentMethods?.map((method) => html`
          <${Fragment}>
            <input type="radio" 
                   name='payment-method' 
                   id=${method.code}
                   value=${method.code}
                   data-method-code=${method.code}
                   data-method-title=${method.title} />
            <label for=${method.code}>${method.title}</label>
          <//>
        `)}
      </div>
      <button class="button primary" onClick=${handleSetPaymentMethod}>Set payment method</button>
    <//>
    
  `;
}

function PaymentForm() {
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    CheckoutApi.placeOrder();
  };

  return html`
    <form>
      <span>Select payment method</span>
      <${PaymentMethodSelector} />
      <button class="button primary" onClick=${handlePlaceOrder}>Place Order</button>
    </form>
  `;
}

function PaymentStep({ active }) {
  return html`
      <${CheckoutStepWrapper} active=${active} title="STEP 2: Payment Information">
          ${active && html`<${PaymentForm} />`}
      <//>
  `;
}

function OrderSummary(props) {
  const [orderSummaryState, setOrderSummaryState] = useState({});
  const {shippingMethod} = orderSummaryState


    // Event Bus (Vanilla JS implementation – to be moved to its own lib file)
    const events = (() => {
      return {
        on(event, handler) {
          const subscriber = new BroadcastChannel('ElsieSDK/EventBus');

          subscriber.addEventListener('message', (msg) => {
            if (msg.data?.event === event) {
              handler(msg.data.payload);
            }
          });

          return {
            off() {
              subscriber.close();
            },
          };
        },
        emit(event, payload) {
          const publisher = new BroadcastChannel('ElsieSDK/EventBus');
          publisher.postMessage({
            event,
            payload
          });
        },
      };
    })();

    // Initialize form state with shipping address if empty
    useEffect(() => {
      events.on('checkout/shippingMethodSet', (event) => {
        console.log('shipping method set event received', event);
        setOrderSummaryState({shippingMethod: event})
      });
    }, []);

  return html`
    <div>${!!shippingMethod?.currency ? html`${shippingMethod?.methodTitle} ${shippingMethod?.amount} ${shippingMethod?.currency}` : html`<i>Shipping method not selected</i>`}</div>
    <button class="button primary" onClick=${() => CheckoutApi.proceedToCheckout()}>Proceed to checkout</button>
    `;
}

function OrderSummaryStep({ active }) {
  return html`
  <${CheckoutStepWrapper} active=${active} title="Order Summary">
      ${active && html`<${OrderSummary} />`}
  <//>
`; 
}

function Checkout() {
  const checkoutState = useCheckoutMFE();

  console.log('checkout state', checkoutState);
  console.log('cartid', checkoutState?.context?.cartId);

  return html`
    <${CheckoutContext.Provider} value=${checkoutState}>
        <${OrderSummaryStep} active=${true} />
        <${ShippingStep} active=${checkoutState.state === 'shipping'} />
        <${PaymentStep} active=${checkoutState.state === 'payment'} />
    <//>
  `;
}

export default async function decorate(block) {
  block.innerHTML = '<div class="full-height"></div>';

  const checkout = html`<${Checkout} />`;

  render(checkout, block);
}
