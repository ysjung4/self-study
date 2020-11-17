import React from 'react';

const Count = ( {text,count}) => {
    console.log('나이와 급여증가')
    return (
        <div>
            <h2> {text}/{count}</h2>
        </div>
    );
};

export default Count;