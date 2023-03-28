/* eslint-disable import/no-cycle */
import { store } from './init-cart.js';
import { performMonolithGraphQLQuery } from '../commerce.js';

/* Queries */

const cartQueryFragment = `fragment cartQuery on Cart {
  id
  items {
      prices {
          price {
              currency
              value
          }
      }
      product {
          name
          sku
          url_key
          thumbnail {
              url
          }
      }
      ... on ConfigurableCartItem {
          configurable_options {
              option_label
              value_label
          }
          configured_variant {
              thumbnail {
                  url
              }
          }
      }
      quantity
      uid
  }
  prices {
      subtotal_excluding_tax {
          currency
          value
      }
      grand_total {
          currency
          value
      }
      discounts {
          amount {
              value
              currency
          }
          label
      }
      applied_taxes {
          amount {
              currency
              value
          }
          label
      }
  }
  shipping_addresses {
      selected_shipping_method {
        method_title 
          amount {
              currency
              value
          }
      }
  }
  total_quantity
}`;

const getCartQuery = `query getCart($cartId: String!) {
  cart(cart_id: $cartId) {
      ...cartQuery
  }
}
${cartQueryFragment}`;

const createCartMutation = `mutation createCart {
  cartId: createEmptyCart
}`;

const removeItemFromCartMutation = `mutation removeItemFromCart($cartId: String!, $uid: ID!) {
  removeItemFromCart(input: { cart_id: $cartId, cart_item_uid: $uid }) {
      cart {
          ...cartQuery
      }
  }
}
${cartQueryFragment}`;

const updateCartItemsMutation = `mutation updateCartItems($cartId: String!, $items: [CartItemUpdateInput!]!) {
  updateCartItems(input: { cart_id: $cartId, cart_items: $items }) {
      cart {
          ...cartQuery
      }
  }
}
${cartQueryFragment}`;

const addProductsToCartMutation = `mutation addProductsToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
  addProductsToCart(cartId: $cartId, cartItems: $cartItems) {
      cart {
          ...cartQuery
      }
      user_errors {
          code
          message
      }
  }
}
${cartQueryFragment}`;

export {
  getCartQuery,
  createCartMutation,
  removeItemFromCartMutation,
  updateCartItemsMutation,
  addProductsToCartMutation,
};

/* Methods */

const handleCartErrors = (errors) => {
  if (!errors) {
    return;
  }

  // Cart cannot be found
  if (errors.some(({ extensions }) => extensions?.category === 'graphql-no-such-entity')) {
    console.error('Cart does not exist, resetting cart');
    store.resetCart();
    return;
  }

  // Throw for everything else
  throw new Error(errors);
};

export function waitForCart() {
  const buttons = document.querySelectorAll('button.minicart, .minicart-header > .close');
  buttons.forEach((button) => { button.disabled = true; });
  return () => {
    buttons.forEach((button) => { button.disabled = false; });
  };
}

export async function getCart() {
  if (!store.getCartId()) {
    return;
  }

  const done = waitForCart();
  let data;
  let errors;
  try {
    ({ data, errors } = await performMonolithGraphQLQuery(
      getCartQuery,
      { cartId: store.getCartId() },
      false,
    ));
    handleCartErrors(errors);
    store.setCart(data.cart);
    console.debug('fetched cart', data.cart);
  } catch (err) {
    console.error('Could not fetch cart', err);
  } finally {
    done();
  }
}

export async function createCart() {
  try {
    const { data, errors } = await performMonolithGraphQLQuery(createCartMutation, {}, false);
    handleCartErrors(errors);
    const { cartId } = data;
    store.setCartId(cartId);
    console.debug('created empty cart', cartId);
  } catch (err) {
    console.error('Could not create empty cart', err);
  }
}

export async function addToCart(sku, options, quantity) {
  const done = waitForCart();
  const variables = {
    cartId: store.getCartId(),
    cartItems: [{
      sku,
      quantity,
      selected_options: options,
    }],
  };
  try {
    const { data, errors } = await performMonolithGraphQLQuery(
      addProductsToCartMutation,
      variables,
      false,
    );
    handleCartErrors(errors);
    const { cart, user_errors: userErrors } = data.addProductsToCart;
    if (userErrors.length > 0) {
      throw new Error(userErrors);
    }
    store.setCart(cart);
    console.debug('Added items to cart', variables, cart);
  } catch (err) {
    console.error('Could not add item to cart', err);
  } finally {
    done();
  }
}

export async function removeItemFromCart(uid) {
  const done = waitForCart();
  const variables = {
    cartId: store.getCartId(),
    uid,
  };
  try {
    const { data, errors } = await performMonolithGraphQLQuery(
      removeItemFromCartMutation,
      variables,
      false,
    );
    handleCartErrors(errors);
    store.setCart(data.removeItemFromCart.cart);
    console.debug('Removed item from cart', variables, data.removeItemFromCart.cart);
  } catch (err) {
    console.error('Could not remove item from cart', err);
  } finally {
    done();
  }
}

export async function updateQuantityOfCartItem(cartItemUid, quantity) {
  const done = waitForCart();
  const variables = {
    cartId: store.getCartId(),
    items: [{
      cart_item_uid: cartItemUid,
      quantity,
    }],
  };
  try {
    const { data, errors } = await performMonolithGraphQLQuery(
      updateCartItemsMutation,
      variables,
      false,
    );
    handleCartErrors(errors);
    store.setCart(data.updateCartItems.cart);
    console.debug('Update quantity of item in cart', variables, data.updateCartItems.cart);
  } catch (err) {
    console.error('Could not update quantity of item in cart', err);
  } finally {
    done();
  }
}
