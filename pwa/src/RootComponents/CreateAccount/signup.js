import React from 'react';

import CreateAccountPage from './createAccountPage';
import { useProtectedPage } from '../Account/accountPage';

/**
 * @RootComponent
 * description = 'Basic Account Page'
 * pageTypes = ACCOUNT
 */
function SignUp() {
    const [, redirectIfSignedIn] = useProtectedPage();
    redirectIfSignedIn();

    return  <CreateAccountPage
        signedInRedirectUrl='/customer/account'
        signInPageUrl='/customer/account/login'
    />;
}

export default SignUp;
