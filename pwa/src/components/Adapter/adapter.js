import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { useAdapter } from '@magento/peregrine/lib/talons/Adapter/useAdapter';
import { AppContextProvider } from '@magento/venia-ui/lib/components/App';

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
                    <AppContextProvider>{children}</AppContextProvider>
                </BrowserRouter>
            </ReduxProvider>
        </ApolloProvider>
    );
};

export default Adapter;
