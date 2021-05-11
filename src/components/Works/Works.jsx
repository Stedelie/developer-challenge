import React from 'react';

import Price from 'components/Price/Price';

const Works = ({works}) => {
    return (
        <div>
            {works.map(work => {
                return(
                    <div key={work.id}>
                        {work.title}
                        <Price price={work.price} />
                    </div>
                )
            })}
        </div>
    );
};

export default Works;