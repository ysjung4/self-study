import React from 'react';

const Display = ({name,animal}) => {
    return (
        <div>
            {
                `${name}님이 좋아하는 동물은 ${animal}입니다`
            }
        </div>
    );
};

export default Display;