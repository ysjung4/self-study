import React from 'react';

const Animal = ({animal,onAnimal}) => {
    return (
        <div>
            <lable> Animal :</lable>
        <input type="text" value={animal} onChange={onAnimal}/>
        </div>
    );
};

export default Animal;