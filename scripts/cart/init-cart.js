/* eslint-disable import/no-cycle */
class Store {
  constructor(key = Store.CART_STORE) {
    this.subscribers = [];
    this.key = key;
    this.cartId = null;
    this.type = 'guest';
    this.cartId = Store.getPWACartId();
  }

  // TODO: Listen to localStorage changes?

  static PWA_CARTID_STORE = 'M2_VENIA_BROWSER_PERSISTENCE__cartId';

  static CART_STORE = 'COMMERCE_CART_CACHE';

  static COOKIE_SESSION = 'COMMERCE_SESSION';

  static COOKIE_CART_ID = 'COMMERCE_CART_ID';

  static COOKIE_EXPIRATION_DAYS = 30;

  static DEFAULT_CART = {
    items: [],
    id: null,
    total_quantity: 0,
  };

  static getPWACartId() {
    const cartIdField = window.localStorage.getItem(Store.PWA_CARTID_STORE);
    if (!cartIdField) {
      return null;
    }
    try {
      const parsed = JSON.parse(cartIdField);
      return parsed.value.replaceAll('"', '');
    } catch (err) {
      console.error('Could not parse PWA cartId', err);
      return null;
    }
  }

  static setPWACartId(cartId) {
    window.localStorage.setItem(Store.PWA_CARTID_STORE, JSON.stringify({
      value: `"${cartId}"`,
      timeStored: Date.now(),
    }));
  }

  static getCookie(key) {
    return document.cookie
      .split(';')
      .map((c) => c.trim())
      .filter((cookie) => cookie.startsWith(`${key}=`))
      .map((cookie) => decodeURIComponent(cookie.split('=')[1]))[0] || null;
  }

  static setCookie(key, value) {
    const expires = new Date(Date.now() + Store.COOKIE_EXPIRATION_DAYS * 864e5).toUTCString();
    document.cookie = `${key}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  setCartId(cartId) {
    this.cartId = cartId;
    Store.setPWACartId(cartId);
    this.setCart({
      ...this.getCart(),
      id: cartId,
    });
  }

  getCartId() {
    return this.cartId;
  }

  setCart(cart) {
    // Only store cart with proper id
    if (!this.cartId) {
      return;
    }
    window.localStorage.setItem(`${this.key}_${this.cartId}`, JSON.stringify(cart));

    this.subscribers.forEach((callback) => {
      callback(cart);
    });
  }

  getCart() {
    if (!this.cartId) {
      return Store.DEFAULT_CART;
    }
    try {
      const parsed = JSON.parse(window.localStorage.getItem(`${this.key}_${this.cartId}`)) || Store.DEFAULT_CART;
      return parsed;
    } catch (err) {
      console.error('Failed to parse cart from localStore. Resetting it.');
      window.localStorage.removeItem(`${this.key}_${this.cartId}`);
    }
    return Store.DEFAULT_CART;
  }

  resetCart() {
    // TODO: Reset PWA Studio cartId
    window.localStorage.removeItem(`${this.key}_${this.cartId}`);
    this.cartId = null;
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    callback(this.getCart());
  }
}

export const store = new Store();

export const cartApi = {
  addToCart: async (sku, options, quantity) => {
    const { addToCart, createCart } = await import('./api.js');
    const { showCart } = await import('./minicart.js');
    if (!store.getCartId()) {
      console.debug('Cannot add item to cart, need to create a new cart first.');
      await createCart();
    }
    await addToCart(sku, options, quantity);
    showCart();
  },
  toggleCart: async () => {
    const { toggle } = await import('./minicart.js');
    toggle();
  },
  cartItemsQuantity: {
    watch: (callback) => {
      store.subscribe((cart) => {
        callback(cart.total_quantity || 0);
      });
    },
  },
};
