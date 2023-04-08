/**
 * @RootComponent
 * description = 'Basic Account Page'
 * pageTypes = ACCOUNT
 */
import React from 'react';
import { render } from 'react-dom';
import Account from './account';
import '../../index.css';

console.log('Account Loaded');

const pageTypeScript = document.querySelector('script[id="account-page-type"]');
const pageTypeObject = JSON.parse(pageTypeScript.innerHTML) || ({"pageType": "myaccount"});
const pageType = pageTypeObject.pageType;

render(<Account pageType={pageType} />, document.querySelector('.block.commerce-account'));
