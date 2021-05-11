import { DEFAULT_CURRENCY } from 'const/const';
import React from 'react';

import STYLES from 'components/Price/Price.scss'
import formatPrice from 'helpers/formatPrice';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Price = ({price = 0, currency = DEFAULT_CURRENCY}) => {
    return (
        <div className={getClassName('Price')}>{ formatPrice(price, '.', ',') } { currency }</div>
    )
};

export default Price;