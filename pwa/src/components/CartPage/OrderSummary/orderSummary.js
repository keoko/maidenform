import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { func } from 'prop-types';

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './orderSummary.module.css';
import CouponCode from '../PriceAdjustments/CouponCode';
import PriceSummary from '../PriceSummary';
import LinkButton from '@magento/venia-ui/lib/components/LinkButton/linkButton';


const OrderSummary = props => {
    const classes = useStyle(defaultClasses, props.classes);

    const { setIsCartUpdating } = props;
    const { formatMessage } = useIntl();

    return (
        <div className={classes.root} data-cy="PriceAdjustments-root">
            <span>Order Summary</span>
            <CouponCode setIsCartUpdating={setIsCartUpdating} />
            <PriceSummary />
            <LinkButton
                        className={classes.goToCheckout}
                        data-cy="goToCheckout"
                        url="/checkout"
                    >
                        <FormattedMessage
                            id={'goToCheckout'}
                            defaultMessage={'Go to Checkout'}
                        />
                    </LinkButton>
        </div>
    );
};

export default OrderSummary;

OrderSummary.propTypes = {
    setIsCartUpdating: func
};
