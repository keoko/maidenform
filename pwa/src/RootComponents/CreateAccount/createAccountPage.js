import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';

import { useCreateAccountPage } from '@magento/peregrine/lib/talons/CreateAccountPage/useCreateAccountPage';
import CreateAccount from './createAccount';
import { StoreTitle } from '@magento/venia-ui/lib/components/Head';


const CreateAccountPage = props => {
    const classes = props.classes || {};
    const { createAccountProps } = useCreateAccountPage(props);
    const { formatMessage } = useIntl();

    return (
        <div className={classes.root}>
            <StoreTitle>
                {formatMessage({
                    id: 'createAccountPage.title',
                    defaultMessage: 'Create an Account'
                })}
            </StoreTitle>
            <h1 className={classes.header}>
                <FormattedMessage
                    id="createAccountPage.header"
                    defaultMessage="Create an Account"
                />
            </h1>
            <div className={classes.contentContainer}>
                <CreateAccount {...createAccountProps} />
            </div>
        </div>
    );
};

CreateAccountPage.defaultProps = {
    signedInRedirectUrl: '/order-history',
    signInPageUrl: '/sign-in'
};

CreateAccountPage.propTypes = {
    classes: shape({
        root: string,
        header: string,
        contentContainer: string
    }),
    signedInRedirectUrl: string,
    signInPageUrl: string
};

export default CreateAccountPage;
