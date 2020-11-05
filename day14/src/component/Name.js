import React from 'react';

const Name = ({name, onName}) => {
    return (
        <div>
            <label>Name : </label>
            <input type="text" value={name} onChange={onName}/>
        </div>
    );
};

export default Name;