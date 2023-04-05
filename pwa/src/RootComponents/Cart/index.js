/**
 * @RootComponent
 * description = 'Basic Cart Page'
 * pageTypes = CART
 */
import React from 'react';
import { render } from 'react-dom';

import Cart from './cart';
import store from '../../store';
import Adapter from '../../components/Adapter/adapter.js';

import '../../index.css';

const origin = globalThis.location.origin;
const styles = new Set();
const configureLinks = links => [...links.values()];

render((
    <Adapter
        apiUrl="https://www.marbec.click/graphql-maidenform-qa"
        configureLinks={configureLinks}
        origin={origin}
        store={store}
        styles={styles}>
        <Cart />
    </Adapter>
), document.querySelector('.block.commerce-cart'));

export { Cart as default };