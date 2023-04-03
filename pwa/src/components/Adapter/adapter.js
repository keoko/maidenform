import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider as HeadProvider } from 'react-helmet-async';

import { useAdapter } from '@magento/peregrine/lib/talons/Adapter/useAdapter';
import { AppContextProvider } from '@magento/venia-ui/lib/components/App';
import ToastContainer from '@magento/venia-ui/lib/components/ToastContainer/toastContainer';

const Adapter = props => {
    console.log('POSSIBLE_TYPES', POSSIBLE_TYPES);
    const talonProps = useAdapter(props);
    const {
        apolloProps,
        initialized,
        reduxProps,
        routerProps,
    } = talonProps;

    // TODO: Replace with app skeleton. See PWA-547.
    if (!initialized) {
        return null;
    }

    const children = props.children;

    console.log('apolloProps', apolloProps);

    return (
        <ApolloProvider {...apolloProps}>
            <ReduxProvider {...reduxProps}>
                <BrowserRouter {...routerProps}>
                    {/* TODO: Remove dependency to Venia UI */}
                    <AppContextProvider>
                        {/* TODO: Remove HeadProvider again after copying over CartPage files */}
                        <HeadProvider>
                            {children}
                            {/* Remove dependency to Venia UI */}
                            <ToastContainer />
                        </HeadProvider>
                    </AppContextProvider>
                </BrowserRouter>
            </ReduxProvider>
        </ApolloProvider>
    );
};

export default Adapter;
