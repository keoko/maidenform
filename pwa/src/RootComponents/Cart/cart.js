import CartPage from '@magento/venia-ui/lib/components/CartPage/cartPage';
import React, { Fragment } from 'react';

// TODO: Copy over CartPage files
// TODO: Somehow add `webpackDevServerOptions.headers = { "Access-Control-Allow-Origin": "*" };` to PWADevServer to enable `yarn watch` with Franklin
// TODO: Remove react-refresh from pwa/node_modules/@magento/babel-preset-peregrine/lib/index.js for dev build which misses react-refresh since it's not delivered by PWADevServer

const Cart = props => {
    // TODO: CSS?
    console.log('props', props);
    return (
        <Fragment>
            <div>Hello Cart 2</div>
            <CartPage />
        </Fragment>
    );
};

export default Cart;