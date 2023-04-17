import React from 'react';
import { bool, func, object, shape, string } from 'prop-types';
import { useIntl } from 'react-intl';
import { Form } from 'informed';

import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import Checkbox from '@magento/venia-ui/lib/components/Checkbox';
import Country from '@magento/venia-ui/lib/components/Country';
import Field from '../../../components/Field/field';
import FormError from '@magento/venia-ui/lib/components/FormError';
import Postcode from '@magento/venia-ui/lib/components/Postcode';
import Region from '../../../components/Region/region';
import TextInput from '../../../components/TextInput/textInput';
import Button from '../../../components/Button/button';

import classes from './AddEditDialog.module.css';
import fieldClasses from '../../CreateAccount/field.module.css';
import textInputClasses from './textInput.module.css';
import messageClasses from '../../CreateAccount/inputMessage.module.css';


const AddEditDialog = props => {
    const {
        formErrors,
        formProps,
        isBusy,
        isEditMode,
        isOpen,
        onCancel,
        onConfirm
    } = props;

    const { formatMessage } = useIntl();

    let formatTitleArgs;
    if (isEditMode) {
        formatTitleArgs = {
            id: 'addressBookPage.editDialogTitle',
            defaultMessage: 'Edit Address'
        };
    } else {
        formatTitleArgs = {
            id: 'addressBookPage.addDialogTitle',
            defaultMessage: 'New Address'
        };
    }
    const title = formatMessage(formatTitleArgs);

    const firstNameLabel = formatMessage({
        id: 'global.firstName',
        defaultMessage: 'First Name'
    });
    const lastNameLabel = formatMessage({
        id: 'global.lastName',
        defaultMessage: 'Last Name'
    });
    const street2Label = formatMessage({
        id: 'global.streetAddress2',
        defaultMessage: 'Street Address 2'
    });
    const telephoneLabel = formatMessage({
        id: 'global.phoneNumber',
        defaultMessage: 'Phone Number'
    });



            /* <Dialog
            confirmTranslationId={'global.save'}
            confirmText="Save"
            formProps={formProps}
            isOpen={isOpen}
            onCancel={onCancel}
            onConfirm={onConfirm}
            shouldDisableAllButtons={isBusy}
            title={title}>
            </Dialog> */


    // Override FieldIcons styling to hide before/after
    // Override Region, Postcode, Country, Checkbox

    return (
        <div className={classes.root}>
        <h1>{title}</h1>
        <Form {...formProps} onSubmit={onConfirm}>
            <div className={classes.sectionFlex}>
                <div className={classes.section}>
                    <div className={classes.sectionHeader}>
                        <h2>Contact Information</h2>
                    </div>
                    <div className={classes.sectionContent}>
                        <FormError
                            classes={{ root: classes.errorContainer }}
                            errors={Array.from(formErrors.values())}
                        />
                        <Field id="firstname" label={firstNameLabel} classes={fieldClasses}>
                            <TextInput
                                field="firstname"
                                classes={textInputClasses}
                                messageClasses={messageClasses}
                                validate={isRequired}
                            />
                        </Field>
                        <Field id="lastname" label={lastNameLabel} classes={fieldClasses}>
                            <TextInput
                                field="lastname"
                                classes={textInputClasses}
                                messageClasses={messageClasses}
                                validate={isRequired}
                            />
                        </Field>
                        <Field id="telephone" label={telephoneLabel} classes={fieldClasses}>
                            <TextInput
                                field="telephone"
                                classes={textInputClasses}
                                messageClasses={messageClasses}
                                validate={isRequired}
                            />
                        </Field>
                    </div>
                </div>
                <div className={classes.section}>
                    <div className={classes.sectionHeader}>
                        <h2>Address</h2>
                    </div>
                    <div className={classes.sectionContent}>
                            <Field id="street1" label="Street Address" classes={fieldClasses}>
                                <TextInput
                                    field="street[0]"
                                    classes={textInputClasses}
                                    messageClasses={messageClasses}
                                    validate={isRequired}
                                />
                            </Field>
                            <Field id="street2" label={street2Label} optional={true} classes={{ ...fieldClasses, label: classes.optionalStreetField }}>
                                <TextInput
                                    field="street[1]"
                                    classes={textInputClasses}
                                    messageClasses={messageClasses}
                                />
                            </Field>
                        <Field id="city" label="City" classes={fieldClasses}>
                            <TextInput
                                field="city"
                                classes={textInputClasses}
                                messageClasses={messageClasses}
                                validate={isRequired}
                            />
                        </Field>
                        <Region
                            fieldClasses={fieldClasses}
                            inputClasses={textInputClasses}
                            countryCodeField={'country_code'}
                            fieldInput={'region[region]'}
                            fieldSelect={'region[region_id]'}
                            optionValueKey="id"
                            label="State/Province"
                            validate={isRequired}
                        />
                        <Postcode validate={isRequired} />
                        <Country
                            field={'country_code'}
                            validate={isRequired}
                        />
                        <Checkbox
                            field="default_billing"
                            label="Use as my default billing address"
                        />
                        <Checkbox
                            field="default_shipping"
                            label="Use as my default shipping address"
                        />
                    </div>
                </div>
            </div>
            <div className={classes.section}>
                <Button disabled={isBusy} priority="high" type="submit">Save Address</Button>
                <Button disabled={isBusy} onClick={onCancel} priority="low" type="reset">Cancel</Button>
            </div>
        </Form>
        </div>
    );
};

export default AddEditDialog;

AddEditDialog.propTypes = {
    classes: shape({
        root: string,
        city: string,
        country: string,
        default_address_check: string,
        errorContainer: string,
        firstname: string,
        lastname: string,
        middlename: string,
        postcode: string,
        region: string,
        street1: string,
        street2: string,
        telephone: string
    }),
    formErrors: object,
    isEditMode: bool,
    isOpen: bool,
    onCancel: func,
    onConfirm: func
};
