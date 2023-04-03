/**
 * @RootComponent
 * description = 'Basic Checkout Page'
 * pageTypes = CHECKOUT
 */
import React from 'react';
import { render } from 'react-dom';

import Checkout from './checkout';

console.log('Checkout Loaded');

render(<Checkout />, document.querySelector('.block.commerce-checkout'));

export { Checkout as default };