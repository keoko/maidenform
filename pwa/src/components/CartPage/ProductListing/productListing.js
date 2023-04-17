import React, { Fragment, Suspense } from 'react';
import { FormattedMessage } from 'react-intl';
import { useProductListing } from '@magento/peregrine/lib/talons/CartPage/ProductListing/useProductListing';

import { useStyle } from '@magento/venia-ui/lib/classify';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import defaultClasses from './productListing.module.css';
import Product from './product';
import ErrorMessage from './errorMessage';

//FIXME: use lazy load
// const EditModal = React.lazy(() =>
//     async () => await import('@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal').default
// );
//
import EditModal from '@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal'

/**
 * A child component of the CartPage component.
 * This component renders the product listing on the cart page.
 *
 * @param {Object} props
 * @param {Function} props.setIsCartUpdating Function for setting the updating state of the cart.
 * @param {Object} props.classes CSS className overrides.
 * See [productListing.module.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListing.module.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import ProductListing from "@magento/venia-ui/lib/components/CartPage/ProductListing";
 */
const ProductListing = props => {
    const {
        onAddToWishlistSuccess,
        setIsCartUpdating,
        fetchCartDetails
    } = props;

    const talonProps = useProductListing();

    const {
        activeEditItem,
        isLoading,
        error,
        items,
        setActiveEditItem,
        wishlistConfig
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);

    if (isLoading) {
        return (
            <LoadingIndicator>
                <FormattedMessage
                    id={'productListing.loading'}
                    defaultMessage={'Fetching Cart...'}
                />
            </LoadingIndicator>
        );
    }

    if (items.length) {
        console.log(items);
        const productComponents = items.map(product => (
            <Product
                item={product}
                key={product.uid}
                setActiveEditItem={setActiveEditItem}
                setIsCartUpdating={setIsCartUpdating}
                onAddToWishlistSuccess={onAddToWishlistSuccess}
                fetchCartDetails={fetchCartDetails}
                wishlistConfig={wishlistConfig}
            />
        ));

        return (
            <Fragment>
                <ErrorMessage error={error} />
                <div className={classes.root} data-cy="ProductListing-root">
                    <div className={classes.columnHeader}>Product</div>
                    <div className={classes.columnHeader}>Details</div>
                    <div className={classes.columnHeaderPrice}>Price</div>
                    {productComponents}
                </div>
                <Suspense fallback={null}>
                    <EditModal
                        item={activeEditItem}
                        setIsCartUpdating={setIsCartUpdating}
                        setActiveEditItem={setActiveEditItem}
                    />
                </Suspense>
            </Fragment>
        );
    }

    return null;
};

export default ProductListing;
