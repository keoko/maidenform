import React from 'react';

import CreateAccountPage from '@magento/venia-ui/lib/components/CreateAccountPage';
import { useProtectedPage } from '../Account/AccountPage';

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
