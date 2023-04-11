import React from 'react';

import store from '../../store';
import SignInPage from '@magento/venia-ui/lib/components/SignInPage';
import Adapter from '../../components/Adapter/adapter';

const origin = globalThis.location.origin;
const styles = new Set();
const configureLinks = links => [...links.values()];

import classes from './login.module.css';

/**
 * @RootComponent
 * description = 'Basic Account Page'
 * pageTypes = ACCOUNT
 */
function Login() {
    return <Adapter
        apiUrl="https://www.marbec.click/graphql-maidenform-qa"
        configureLinks={configureLinks}
        origin={origin}
        store={store}
        styles={styles}>
        <div className={classes.container}>
            <SignInPage createAccountPageUrl='/customer/account/create' forgotPasswordPageUrl='/customer/account/forgotpassword' />
        </div>
    </Adapter>
}

export default Login;
