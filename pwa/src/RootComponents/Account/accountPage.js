import React from 'react';

import SignInPage from '@magento/venia-ui/lib/components/SignInPage';
import ForgotPasswordPage from '@magento/venia-ui/lib/components/ForgotPasswordPage';
import SavedPaymentsPage from '@magento/venia-ui/lib/components/SavedPaymentsPage';
import OrderHistoryPage from '@magento/venia-ui/lib/components/OrderHistoryPage';
import AccountInformationPage from '@magento/venia-ui/lib/components/AccountInformationPage';
import AddressBookPage from '@magento/venia-ui/lib/components/AddressBookPage';
import WishListPage from '@magento/venia-ui/lib/components/WishlistPage';

import AccountNavigation from './accountNavigation';

import classes from './accountPage.module.css';

const AccountTypeHandler = props => {
    switch (props.pageType) {
        case 'myaccount':
            return <AccountInformationPage />;
        case 'address':
            return <AddressBookPage />;
        case 'editaccount':
            return <AccountInformationPage />;
        case 'history':
            return <OrderHistoryPage />;
        case 'wishlist':
            return <WishListPage />;
        case 'creditcards':
            return <SavedPaymentsPage />;
        case 'resetpassword':
            return <ForgotPasswordPage />
        default:
            return <SignInPage />;
    }
}

const AccountPage = props => {
    const { pageType } = props;

    return (<div className={classes.root}>
        <div className={classes.sidebar}>
            <AccountNavigation pageType={pageType} />
        </div>
        <div className={classes.content}>
            <AccountTypeHandler pageType={pageType} />
        </div>
    </div>)
}

export default AccountPage;