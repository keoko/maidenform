import CartPage from '@magento/venia-ui/lib/components/CartPage/cartPage';
import React, { Fragment } from 'react';

// TODO: Copy over CartPage files
// TODO: Remove errors from @magento/peregrine/lib/talons/CartPage/ProductListing/productListingFragments.gql.js

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