import React, { Fragment } from 'react';
import MyAccount from '@magento/venia-ui/lib/components/MyAccount';

const Account = props => {
    console.debug('props', props)
    return <Fragment><MyAccount {...props} /></Fragment>;
}
export default Account;
