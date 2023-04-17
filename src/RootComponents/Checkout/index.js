/**
 * @RootComponent
 * description = 'Basic Checkout Page'
 * pageTypes = CHECKOUT
 */
import React from 'react';
import { render } from 'react-dom';

import store from '../../store';
import Adapter from '../../components/Adapter/adapter.js';
import Checkout from './checkout';

const origin = globalThis.location.origin;
const styles = new Set();
const configureLinks = links => [...links.values()];

console.log('Checkout Loaded');

render((
    <Adapter
        apiUrl="https://www.marbec.click/graphql-maidenform-qa"
        configureLinks={configureLinks}
        origin={origin}
        store={store}
        styles={styles}>
        <Checkout />
    </Adapter>
), document.querySelector('.block.commerce-checkout'));

export { Checkout as default };
