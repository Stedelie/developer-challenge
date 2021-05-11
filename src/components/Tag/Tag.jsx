import React from 'react';

import getTagForWork from 'helpers/getTagForWork';

import STYLES from 'components/Tag/Tag.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Tag = ({tags}) => {
    return (
        <div className={getClassName('Tag')}> 
            {getTagForWork(tags)}
        </div>
    )
};

export default Tag;