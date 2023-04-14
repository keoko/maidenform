import React, { useEffect, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { PlusSquare } from 'react-feather';

import { useAddressBookPage } from '@magento/peregrine/lib/talons/AddressBookPage/useAddressBookPage';
import Icon from '@magento/venia-ui/lib/components/Icon';
import LinkButton from '@magento/venia-ui/lib/components/LinkButton';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import AddressCard from '../AccountOverview/AddressCard';
import AddEditDialog from './AddEditDialog';
import classes from './AddressBookPage.module.css';
import AddressRow from './AddressRow';

const AddressBookPage = props => {
    const talonProps = useAddressBookPage();
    const {
        confirmDeleteAddressId,
        countryDisplayNameMap,
        customerAddresses,
        formErrors,
        formProps,
        handleAddAddress,
        handleCancelDeleteAddress,
        handleCancelDialog,
        handleConfirmDeleteAddress,
        handleConfirmDialog,
        handleDeleteAddress,
        handleEditAddress,
        isDeletingCustomerAddress,
        isDialogBusy,
        isDialogEditMode,
        isDialogOpen,
        isLoading
    } = talonProps;

    const { formatMessage } = useIntl();

    // TODO: Convert dialog into full page

    const defaultBillingAddress = customerAddresses.find(({ default_billing }) => default_billing);
    const defaultShippingAddress = customerAddresses.find(({ default_shipping }) => default_shipping);
    const remainingAddresses = customerAddresses
        .filter(({ default_billing, default_shipping }) => !default_billing && !default_shipping)
        .map(address => ({ ...address, countryName: countryDisplayNameMap.get(address.country_code) }));
    console.log('remainingAddresses', remainingAddresses);

    useEffect(() => {
        // Check if ?edit=id is set
        let queryEditId = new URLSearchParams(window.location.search).get('edit');
        if (!queryEditId) {
            return;
        }

        // Parse id
        try {
            queryEditId = parseInt(queryEditId, 10);
        } catch(err) {
            console.error('Invalid edit id', queryEditId);
            return;
        }
        console.log('queryEditId', queryEditId);

        // Find address with id
        const addressToEdit = customerAddresses.find(({ id }) => id === queryEditId);
        if (!addressToEdit) {
            return;
        }

        // Switch to edit mode
        console.log('addressToEdit', addressToEdit);
        handleEditAddress(addressToEdit);
    }, [customerAddresses]);

    /* const addressBookElements = useMemo(() => {
        const defaultToBeginning = (address1, address2) => {
            if (address1.default_shipping) return -1;
            if (address2.default_shipping) return 1;
            return 0;
        };

        return Array.from(customerAddresses)
            .sort(defaultToBeginning)
            .map(addressEntry => {
                const countryName = countryDisplayNameMap.get(
                    addressEntry.country_code
                );

                const boundEdit = () => handleEditAddress(addressEntry);
                const boundDelete = () => handleDeleteAddress(addressEntry.id);
                const isConfirmingDelete =
                    confirmDeleteAddressId === addressEntry.id;

                return (
                    <AddressCard
                        address={addressEntry}
                        countryName={countryName}
                        isConfirmingDelete={isConfirmingDelete}
                        isDeletingCustomerAddress={isDeletingCustomerAddress}
                        key={addressEntry.id}
                        onCancelDelete={handleCancelDeleteAddress}
                        onConfirmDelete={handleConfirmDeleteAddress}
                        onDelete={boundDelete}
                        onEdit={boundEdit}
                    />
                );
            });
    }, [
        confirmDeleteAddressId,
        countryDisplayNameMap,
        customerAddresses,
        handleCancelDeleteAddress,
        handleConfirmDeleteAddress,
        handleDeleteAddress,
        handleEditAddress,
        isDeletingCustomerAddress
    ]); */

    if (isLoading) {
        return fullPageLoadingIndicator;
    }

    return (<div className={classes.root}>
        <h1>Address Book</h1>
        <div>{isDialogEditMode ? 'in edit mode' : 'not in edit mode'} {isDialogOpen ? 'dialog open' : 'dialog not open'}</div>
        <div className={classes.section}>
            <div className={classes.sectionHeader}>
                <h2>Default Addresses</h2>
            </div>
            <div className={classes.sectionContent}>
                <div className={classes.box}>
                    <div className={classes.boxTitle}>Default Billing Address</div>
                    {defaultBillingAddress ? (
                        <AddressCard
                            address={defaultBillingAddress}
                            countryName={countryDisplayNameMap.get(defaultBillingAddress.country_code)}
                            onEdit={(address) => handleEditAddress(address)} />
                    ) : (
                        <div className={classes.boxContent}>
                            You have not set a default billing address.
                        </div>
                    )}
                </div>
                <div className={classes.box}>
                    <div className={classes.boxTitle}>Default Shipping Address</div>
                    {defaultShippingAddress ? (
                        <AddressCard
                            address={defaultShippingAddress}
                            countryName={countryDisplayNameMap.get(defaultShippingAddress.country_code)}
                            onEdit={(address) => handleEditAddress(address)} />
                    ) : (
                        <div className={classes.boxContent}>
                            You have not set a default shipping address.
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className={classes.section}>
            <div className={[classes.sectionHeader, classes.sectionAdditionalAddresses].join(' ')}>
                <h2>Additional Address Entries</h2>
            </div>
            <div className={classes.sectionContent}>
                <table className={classes.addressTableDesktop}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Street Address</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>Zip/Postal Code</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {remainingAddresses?.length > 0 ?
                            (remainingAddresses.map((address) => <AddressRow
                                key={address.id}
                                address={address}
                                onEdit={(address) => handleEditAddress(address)}
                                onDelete={(id) => handleDeleteAddress(id)} />)) : 
                            (<tr className={classes.addressTableEmpty}>
                                <td colSpan="9">You have not have any additional addresses saved.</td>
                            </tr>)}
                    </tbody>
                </table>
                <div className={classes.addressTableMobile}>
                    {remainingAddresses?.length > 0 ?
                        (remainingAddresses.map((address) => <AddressRow
                            key={address.id}
                            address={address}
                            mobile={true}
                            onEdit={(address) => handleEditAddress(address)}
                            onDelete={(id) => handleDeleteAddress(id)} />)) :
                        (<div className={classes.addressTableEmpty}>
                            You have not have any additional addresses saved.
                        </div>)}
                </div>
            </div>
        </div>
        <div className={classes.section}>
            <div className={classes.sectionContent}>
                <button onClick={handleAddAddress}>Add New Address</button>
            </div>
        </div>
    </div>);

                    /*
 <div className={classes.root}>
            <h1
                aria-live="polite"
                className={classes.heading}
                data-cy="AddressBookPage-heading"
            >
                {PAGE_TITLE}
            </h1>
            <div className={classes.content} data-cy="AddressBookPage-content">
                {addressBookElements}
                <LinkButton
                    className={classes.addButton}
                    key="addAddressButton"
                    onClick={handleAddAddress}
                    data-cy="AddressBookPage-addButton"
                >
                    <Icon
                        classes={{
                            icon: classes.addIcon
                        }}
                        size={24}
                        src={PlusSquare}
                    />
                    <span className={classes.addText}>
                        <FormattedMessage
                            id={'addressBookPage.addAddressText'}
                            defaultMessage={'Add an Address'}
                        />
                    </span>
                </LinkButton>
            </div>
            <AddEditDialog
                formErrors={formErrors}
                formProps={formProps}
                isBusy={isDialogBusy}
                isEditMode={isDialogEditMode}
                isOpen={isDialogOpen}
                onCancel={handleCancelDialog}
                onConfirm={handleConfirmDialog}
            />
        </div>

                    */

};

export default AddressBookPage;
