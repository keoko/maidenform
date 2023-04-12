import React, { Fragment } from 'react';

import classes from './accountNavigation.module.css';

const links = [
    {
        type: 'myaccount',
        text: 'My Account',
        url: '/customer/account'
    },
    {
        type: 'history',
        text: 'Order History',
        url: '/customer/order-history'
    },
    {
        type: 'wishlist',
        text: 'My Favorites',
        url: '/customer/wishlist'
    },
    {
        type: 'address',
        text: 'Address Book',
        url: '/customer/address'
    },
    {
        type: 'editaccount',
        text: 'Account Information',
        url: '/customer/account/edit'
    },
    {
        type: 'creditcards',
        text: 'Stored Payment Methods',
        url: '/customer/cards'
    },
];

const AccountNavigation = props => {
    const { pageType } = props;

    return (<div className={classes.root}>
        <ul>
            {links.map((link, index) => {
                const { type, text, url } = link;
                const isActive = type === pageType;
                let content = []; 
                if (isActive) {
                    content.push(<li className={classes.active}>{text}</li>);
                } else {
                    content.push(<li><a href={url}>{text}</a></li>);
                }
                if (index === 3) {
                    content.push(<li className={classes.divider} />);
                }
                return <Fragment>{content}</Fragment>;
            })}
        </ul>
    </div>)
}

export default AccountNavigation;
