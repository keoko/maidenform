import React, { Fragment } from 'react';
import { node, shape, string } from 'prop-types';
import { Text as InformedText } from 'informed';
import useFieldState from '@magento/peregrine/lib/hooks/hook-wrappers/useInformedFieldStateWrapper';

import { useStyle } from '@magento/venia-ui/lib/classify';
import { FieldIcons, Message } from '@magento/venia-ui/lib/components/Field';
import defaultClasses from '@magento/venia-ui/lib/components/TextInput/textInput.module.css';

const TextInput = props => {
    const {
        after,
        before,
        messageClasses,
        classes: propClasses,
        field,
        message,
        ...rest
    } = props;
    const fieldState = useFieldState(field);
    const classes = useStyle(defaultClasses, propClasses);
    const inputClass = fieldState.error ? classes.input_error : classes.input;

    return (
        <Fragment>
            <FieldIcons classes={{ after: classes.fieldIconAfter }} after={after} before={before}>
                <InformedText {...rest} className={inputClass} field={field} />
            </FieldIcons>
            <Message classes={messageClasses} fieldState={fieldState}>{message}</Message>
        </Fragment>
    );
};

export default TextInput;

TextInput.propTypes = {
    after: node,
    before: node,
    messageClasses: shape({
       root: string,
        root_error: string
    }),
    classes: shape({
        input: string
    }),
    field: string.isRequired,
    message: node
};
