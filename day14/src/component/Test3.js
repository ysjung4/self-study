import React, { useState } from 'react';

const Name = () =>{
    const [name,setName] =useState('')
    return (
        <div>
            <label htmlFor='usenname'>Name:</label>
            <input type="text" id='username'
            onChange ={(e)=>setName(e.target.value)}/>
            <span>{name}</span>
        </div>
    )
}
const Animal = ({animal,onAnimal}) => {
    return(
        <div>
            <label>Animal:</label>
            <input type="text" value={animal} onChange={onAnimal}/>
            <p>{animal}</p>
        </div>
    )
}
const Display = ({animal}) => {
    return(
        <div>
            {
               `당신이 좋아하는 동물은 ${animal} 입니다.` 
            }
        </div>
    )
}
const Test3 = () => {
    const [animal,setAnimal] =useState('초기동물')

    const handleChange = (e) => {
        const {value} =e.target
        setAnimal(value)

        
    }
    return (
        <div>
         <Name/>
         <hr/>
         <Animal animal={animal} onAnimal={handleChange}/>
         <hr/>
         <Display animal={animal}/>
        </div>
    );
};

export default Test3;