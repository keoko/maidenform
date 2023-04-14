import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { arrayOf, bool, shape, string } from 'prop-types';

import classes from './AddressCard.module.css';

const AddressCard = props => {
    const {
        address,
        countryName,
    } = props;

    const {
        city,
        country_code,
        firstname,
        middlename = '',
        lastname,
        postcode,
        region: { region },
        street,
        telephone,
        id
    } = address;

    const streetRows = street.map((row, index) => {
        return (
            <span className={classes.streetRow} key={index}>
                {row}
            </span>
        );
    });

    const nameString = [firstname, middlename, lastname]
        .filter(name => !!name)
        .join(' ');
    const additionalAddressString = `${city}, ${region} ${postcode}`;

    return (
        <Fragment>
            <div className={classes.content}>
                <span className={classes.name}>{nameString}</span>
                {streetRows}
                <span className={classes.additionalAddress}>{additionalAddressString}</span>
                <span className={classes.country}>{countryName || country_code}</span>
                <span className={classes.telephone}>
                    <FormattedMessage
                        id="addressBookPage.telephone"
                        defaultMessage="Phone {telephone}"
                        values={{ telephone }}
                    />
                </span>
            </div>
            <div className={classes.actions}>
                <a href={`/customer/address?edit=${id}`}>Edit Address</a>
            </div>
        </Fragment>
    );
};

export default AddressCard;

AddressCard.propTypes = {
    address: shape({
        city: string,
        country_code: string,
        default_shipping: bool,
        firstname: string,
        lastname: string,
        postcode: string,
        region: shape({
            region_code: string,
            region: string
        }),
        street: arrayOf(string),
        telephone: string
    }).isRequired,
    countryName: string,
};
