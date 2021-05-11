import React from 'react';

import getTagForWork from 'helpers/getTagForWork';

const Tag = ({tags}) => {
    return (
        <div> 
            {getTagForWork(tags)}
        </div>
    )
};

export default Tag;