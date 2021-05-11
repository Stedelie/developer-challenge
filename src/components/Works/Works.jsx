import React from 'react';

import Price from 'components/Price/Price';
import Tag from 'components/Tag/Tag';

const Works = ({works}) => {
    return (
        <div>
            {works.map(work => {
                return(
                    <div key={work.id}>
                        {work.title}
                        <img src={work.image} alt={work.title} />
                        <Tag tags={work.tags} />
                        <Price price={work.price} />
                    </div>
                )
            })}
        </div>
    );
};

export default Works;