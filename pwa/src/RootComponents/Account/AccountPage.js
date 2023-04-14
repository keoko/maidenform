import React, { useCallback } from 'react';

import ForgotPasswordPage from '@magento/venia-ui/lib/components/ForgotPasswordPage';
import SavedPaymentsPage from '@magento/venia-ui/lib/components/SavedPaymentsPage';
import OrderHistoryPage from '@magento/venia-ui/lib/components/OrderHistoryPage';
import AccountInformationPage from '@magento/venia-ui/lib/components/AccountInformationPage';
import AddressBookPage from '@magento/venia-ui/lib/components/AddressBookPage';
import WishListPage from '@magento/venia-ui/lib/components/WishlistPage';
import { useUserContext } from '@magento/peregrine/lib/context/user';

import AccountNavigation from './AccountNavigation';
import AccountOverview from './AccountOverview/AccountOverview';
import Login from '../Login/login';

import classes from './AccountPage.module.css';

export const useProtectedPage = () => {
    const [{ isSignedIn }] = useUserContext();

    const redirectIfNotSignedIn = useCallback((redirectAfterSignIn) => {
        const loginRedirect = redirectAfterSignIn || '/customer/account';

        if (!isSignedIn) {
            window.location = `/customer/account/login?login_redirect=${loginRedirect}`;
        }
    }, [isSignedIn])

    const redirectIfSignedIn = useCallback((where) => {
        const loginRedirect = where || '/customer/account';

        if (isSignedIn) {
            window.location = loginRedirect;
        }
    }, [isSignedIn])

    return [redirectIfNotSignedIn, redirectIfSignedIn];
}

const AccountTypeHandler = props => {
    const [redirectIfNotSignedIn, redirectIfSignedIn] = useProtectedPage();

    switch (props.pageType) {
        case 'myaccount':
            redirectIfNotSignedIn();
            return <AccountOverview />;
        case 'address':
            redirectIfNotSignedIn();
            return <AddressBookPage />;
        case 'editaccount':
            redirectIfNotSignedIn();
            return <AccountInformationPage />;
        case 'history':
            redirectIfNotSignedIn();
            return <OrderHistoryPage />;
        case 'wishlist':
            redirectIfNotSignedIn();
            return <WishListPage loginRedirect='/customer/wishlist' />;
        case 'creditcards':
            redirectIfNotSignedIn();
            return <SavedPaymentsPage />;
        case 'resetpassword':
            redirectIfSignedIn();
            return <ForgotPasswordPage />;
        default:
            return <Login />;
    }
}

const AccountPage = props => {
    const { pageType } = props;

    return (<div className={classes.root}>
        <div className={classes.sidebar}>
            <AccountNavigation pageType={pageType} />
            {/* TODO: Recently bought items */}
            {/* TODO: Favorites */}
        </div>
        <div className={classes.content}>
            <AccountTypeHandler pageType={pageType} />
        </div>
    </div>)
}

export default AccountPage;
