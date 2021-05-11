import React from 'react';

import Price from 'components/Price/Price';
import Tag from 'components/Tag/Tag';

import STYLES from 'components/Works/Works.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Works = ({works}) => {
    return (
        <>
            {works.map(work => {
                return(
                    <div className={getClassName('Work')} key={work.id}>
                        <div className={getClassName('Work__tag')}>
                            <Tag tags={work.tags} />
                        </div>
                        <div className={getClassName('Work__img')}>
                            <img src={work.image} alt={work.title} />
                        </div>
                        {work.title}
                        <Price price={work.price} />
                    </div>
                )
            })}
        </>
    );
};

export default Works;