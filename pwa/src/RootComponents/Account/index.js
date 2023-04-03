/**
 * @RootComponent
 * description = 'Basic Account Page'
 * pageTypes = ACCOUNT
 */
import React from 'react';
import { render } from 'react-dom';

import Account from './account';

console.log('Account Loaded');

render(<Account />, document.querySelector('.block.commerce-account'));

export { Account as default };