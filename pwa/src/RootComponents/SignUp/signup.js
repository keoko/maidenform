import React from 'react';

import CreateAccountPage from '@magento/venia-ui/lib/components/CreateAccountPage';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { useProtectedPage } from '../Account/accountPage';

/**
 * @RootComponent
 * description = 'Basic Account Page'
 * pageTypes = ACCOUNT
 */
function SignUp() {
    const [redirectIfNotSignedIn, redirectIfSignedIn] = useProtectedPage();
    redirectIfSignedIn();

    return  <CreateAccountPage
        signedInRedirectUrl='/customer/account'
        signInPageUrl='/customer/account/login'
    />;
}

export default SignUp;
