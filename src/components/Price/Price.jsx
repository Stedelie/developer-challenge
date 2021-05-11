import { DEFAULT_CURRENCY } from 'const/const';
import React from 'react';

const Price = ({price = 0, currency = DEFAULT_CURRENCY}) => {
    return (
        <div>{ price } { currency }</div>
    )
};

export default Price;