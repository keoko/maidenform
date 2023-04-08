import React from 'react';

import store from '../../store';
import Adapter from '../../components/Adapter/adapter';
import CreateAccountPage from '@magento/venia-ui/lib/components/CreateAccountPage';

const origin = globalThis.location.origin;
const styles = new Set();
const configureLinks = links => [...links.values()];

/**
 * @RootComponent
 * description = 'Basic Account Page'
 * pageTypes = ACCOUNT
 */
function SignUp() {
    return <Adapter
        apiUrl="https://www.marbec.click/graphql-maidenform-qa"
        configureLinks={configureLinks}
        origin={origin}
        store={store}
        styles={styles}>
        <CreateAccountPage />
    </Adapter>
}

export default SignUp;
