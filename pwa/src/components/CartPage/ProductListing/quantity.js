import React from 'react';
import { Form } from 'informed';
import { func, number, string } from 'prop-types';

const Quantity = props => {
    let options = Array.from({length: props.max}, (_, i) => i + 1);
    return (
        <Form
            initialValues={{
                quantity: props.initialValue
            }}
        >
            <select>
                {options.map((value) => (
                    <option value={value} key={value} >{value}</option>
                ))}
            </select>

        </Form>
    );
};

Quantity.propTypes = {
    initialValue: number,
    itemId: string,
    label: string,
    min: number,
    onChange: func,
    message: string
};

Quantity.defaultProps = {
    label: 'Quantity',
    min: 0,
    max: 10,
    initialValue: 1,
    onChange: () => {}
};

export default Quantity;
