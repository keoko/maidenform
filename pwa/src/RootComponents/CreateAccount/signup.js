import React from 'react';

import store from '../../store';
import Adapter from '../../components/Adapter/adapter';
import CreateAccountPage from './createAccountPage';

const origin = globalThis.location.origin;
const styles = new Set();
const configureLinks = links => [...links.values()];

import classes from './signup.module.css';

/**
 * @RootComponent
 * description = 'Basic Account Page'
 * pageTypes = ACCOUNT
 */
function SignUp() {
    return <Adapter
        apiUrl="https://franklin.maidenform.com/graphql"
        configureLinks={configureLinks}
        origin={origin}
        store={store}
        styles={styles}>
        <CreateAccountPage />
    </Adapter>
}

export default SignUp;
