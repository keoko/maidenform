import React from 'react';

import SignInPage from '@magento/venia-ui/lib/components/SignInPage';
import { useProtectedPage } from '../Account/accountPage';

/**
 * @RootComponent
 * description = 'Basic Account Page'
 * pageTypes = ACCOUNT
 */
function Login() {
    const [redirectIfNotSignedIn, redirectIfSignedIn] = useProtectedPage();
    redirectIfSignedIn(new URL(window.location).searchParams.get('login_redirect'));

    return <SignInPage
        signedInRedirectUrl='/customer/account'
        createAccountPageUrl='/customer/account/create'
        forgotPasswordPageUrl='/customer/account/forgotpassword' />
}

export default Login;
