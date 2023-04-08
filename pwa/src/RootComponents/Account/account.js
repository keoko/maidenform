import React from 'react';
import store from '../../store';
import SignInPage from '@magento/venia-ui/lib/components/SignInPage';
import Adapter from '../../components/Adapter/adapter';
import ForgotPasswordPage from '@magento/venia-ui/lib/components/ForgotPasswordPage';
import SavedPaymentsPage from '@magento/venia-ui/lib/components/SavedPaymentsPage';
import OrderHistoryPage from '@magento/venia-ui/lib/components/OrderHistoryPage';
import AccountInformationPage from '@magento/venia-ui/lib/components/AccountInformationPage';
import AddressBookPage from '@magento/venia-ui/lib/components/AddressBookPage';

const origin = globalThis.location.origin;
const styles = new Set();
const configureLinks = links => [...links.values()];

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
        case 'creditcards':
            return <SavedPaymentsPage />;
        case 'resetpassword':
            return <ForgotPasswordPage />
        default:
            return <SignInPage />;
    }
}

const Account = props => {
    return (<Adapter
        apiUrl="https://www.marbec.click/graphql-maidenform-qa"
        configureLinks={configureLinks}
        origin={origin}
        store={store}
        styles={styles}>
        <AccountTypeHandler pageType={props.pageType} />
    </Adapter>);
}
export default Account;
