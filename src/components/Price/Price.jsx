import { DEFAULT_CURRENCY } from 'const/const';
import React from 'react';

import formatPrice from 'helpers/formatPrice';

const Price = ({price = 0, currency = DEFAULT_CURRENCY}) => {
    return (
        <div>{ formatPrice(price, '.', ',') } { currency }</div>
    )
};

export default Price;