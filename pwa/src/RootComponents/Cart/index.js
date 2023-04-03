/**
 * @RootComponent
 * description = 'Basic Cart Page'
 * pageTypes = CART
 */
import React from 'react';
import { render } from 'react-dom';

import Cart from './cart';

console.log('Cart Loaded');

render(<Cart />, document.querySelector('.block.commerce-cart'));

export { Cart as default };