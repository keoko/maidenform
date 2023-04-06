/**
 * @RootComponent
 * description = 'Basic Account Page'
 * pageTypes = ACCOUNT
 */
import React from 'react';
import { render } from 'react-dom';

import Account from './account';
import Adapter from '../../components/Adapter/adapter';
import store from '../../store';
import SignIn from '@magento/venia-ui/lib/components/SignIn';
import SignInPage from '@magento/venia-ui/lib/components/SignInPage';
const origin = globalThis.location.origin;
const styles = new Set();
const configureLinks = links => [...links.values()];


console.log('Account Loaded');
render((
    <Adapter
        apiUrl="https://www.marbec.click/graphql-maidenform-qa"
        configureLinks={configureLinks}
        origin={origin}
        store={store}
        styles={styles}>
        <SignInPage />
    </Adapter>
), document.querySelector('.block.commerce-account'));

export { Account as default };
