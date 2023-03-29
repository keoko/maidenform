import {
  h, render, createContext,
} from '../../scripts/preact.js';
import { useState, useEffect, useContext } from '../../scripts/preact-hooks.js';
import htm from '../../scripts/htm.js';
import { CheckoutApi } from '../../scripts/commerce-checkout/containers/CheckoutApi.js';

const html = htm.bind(h);

const useCheckoutMFE = () => {
  const [internalMFEState, setInternalMFEState] = useState({});

  useEffect(() => {
    CheckoutApi.init({
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
  const [formState, setFormState] = useState({});

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
    onChange: (e) => setFormState((oldState) => ({
      ...oldState,
      [name]: e.target.value,
    })),
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
      <input ...${useField('email')} placeholder="Email" />
      <input ...${useField('firstName')} placeholder="First Name" />
      <input ...${useField('lastName')} placeholder="Last Name" />
      <input ...${useField('streetAddress1')} placeholder="Street Address 1" />
      <input ...${useField('streetAddress2')} placeholder="Street Address 2" />
      <input ...${useField('city')} placeholder="City" />
        <select name="region" onChange=${updateShippingRegion}>
            ${regions?.map((region) => html`
              <option value=${region.code}>${region.name}</option>
          `)}
        </select>
      <input ...${useField('zipCode')} placeholder="Post Code" />
      <select name="country" onChange=${updateShippingCountry}>
          ${countries?.map((country) => html`
              <option value=${country.id}>${country.full_name_english}</option>
          `)}
      </select>
      <input ...${useField('phoneNumber')} placeholder="Phone Number" />
      <button onClick=${handleSetShippingAddress}>Set shipping address</button>
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
    const selectedMethod = e.target.closest('form').querySelector('input:checked').value;
    console.log(selectedMethod);
    CheckoutApi.selectShippingMethod(selectedMethod);
  };

  return html`
    <form>
      <span>How would you like your order to be shipped?</span>
      <div class="shipping-method-selector">
        ${shippingMethods.map((method) => html`
            <input type="radio" 
                   name="shipping-method" 
                   value=${method.method_code} />
            <label for=${method.method_code}>
              <span class="shipping-method-title">${method.method_title}</span>
              <span class="shipping-method-price">
                ${method.price_incl_tax.value} ${method.price_incl_tax.currency}
              </span>
            </label>
          `)}
      </div>
      <button onclick=${handleSetShippingMethod}>Continue to next step</button>
    </form>
  `;
}

function CheckoutStepWrapper({ title, children, active }) {
  return html`
    <div class="checkout-step-wrapper">
      <h2 class=${active ? 'title-active' : ''}>${title}</h2>
        ${active && html`
            <div class="shipping-address-content">
                ${children}
            </div>
        `}
    </div>
  `;
}

function ShippingStep({ active }) {
  return html`
      <${CheckoutStepWrapper} active=${active} title="STEP 1: Shipping information">
          <${ShippingAddressForm} />
          <hr />
          <${ShippingMethodForm} />
      <//>
  `;
}

function PaymentMethodSelector() {
  return html`
    <div class="payment-method-selector">
        <div class="payment-method">
            <input type="radio" name="payment-method" value="paypal" />
            <label for="paypal">PayPal</label>
        </div>
        <div class="payment-method">
            <input type="radio" name="payment-method" value="credit-card" />
            <label for="credit-card">Credit Card</label>
        </div>
    </div>
  `;
}

function PaymentForm() {
  return html`
    <form>
      <span>Have a promotional code?</span>
      <hr />
      <span>Select payment method</span>
      <${PaymentMethodSelector} />
    </form>
  `;
}

function PaymentStep({ active }) {
  return html`
      <${CheckoutStepWrapper} active=${active} title="STEP 2: Payment Information">
          <${PaymentForm} />
      <//>
  `;
}

function Checkout() {
  const checkoutState = useCheckoutMFE();

  console.log(checkoutState);

  return html`
    <${CheckoutContext.Provider} value=${checkoutState}>
        ${checkoutState.state === 'cart' && html`<div>
            ${checkoutState.context.cartId}
            <button onClick=${() => CheckoutApi.proceedToCheckout()}>Proceed to checkout</button>
        </div>`}
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
