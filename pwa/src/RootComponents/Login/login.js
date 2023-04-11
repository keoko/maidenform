import React from 'react';

import store from '../../store';
import SignInPage from '@magento/venia-ui/lib/components/SignInPage';
import Adapter from '../../components/Adapter/adapter';

const origin = globalThis.location.origin;
const styles = new Set();
const configureLinks = links => [...links.values()];

/**
 * @RootComponent
 * description = 'Basic Account Page'
 * pageTypes = ACCOUNT
 */
function Login() {
    return <Adapter
        apiUrl="https://franklin.maidenform.com/graphql"
        configureLinks={configureLinks}
        origin={origin}
        store={store}
        styles={styles}>
        <SignInPage createAccountPageUrl='/customer/account/create' forgotPasswordPageUrl='/customer/account/forgotpassword' />
    </Adapter>
}

export default Login;
