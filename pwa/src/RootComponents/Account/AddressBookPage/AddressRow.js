import React from 'react';
import { arrayOf, shape, string, bool, func } from 'prop-types';

const AddressRow = props => {
    const { address, countryName, mobile, onEdit, onDelete } = props;
    const {
        city,
        firstname,
        lastname,
        postcode,
        region,
        street,
        telephone,
        id,
    } = address;

    if (mobile) {
        return (
            <div>
                <span><strong>First Name:</strong> {firstname}</span>
                <span><strong>Last Name:</strong> {lastname}</span>
                <span><strong>Street Address:</strong> {street.length > 0 ? street[0] : ''}</span>
                <span><strong>City:</strong> {city}</span>
                <span><strong>Country:</strong> {countryName}</span>
                <span><strong>State:</strong> {region?.region}</span>
                <span><strong>Zip/Postal Code:</strong> {postcode}</span>
                <span><strong>Phone:</strong> {telephone}</span>
                <span>
                    <strong>Actions:</strong>
                    <a onClick={() => onEdit(address)}>Edit</a>
                    <a onClick={() => onDelete(id)}>Delete</a>
                </span>
            </div>
        );
    }

    return (
        <tr>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{street.length > 0 ? street[0] : ''}</td>
            <td>{city}</td>
            <td>{countryName}</td>
            <td>{region?.region}</td>
            <td>{postcode}</td>
            <td>{telephone}</td>
            <td>
                <a onClick={() => onEdit(address)}>Edit</a>
                <a onClick={() => onDelete(id)}>Delete</a>
            </td>
        </tr>
    );
};

export default AddressRow;

AddressRow.propTypes = {
    address: shape({
        id: string,
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
    mobile: bool,
    countryName: string,
    onDelete: func.isRequired,
    onEdit: func.isRequired,
};
