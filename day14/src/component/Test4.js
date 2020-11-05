import React, { useState } from 'react';
import Animal from './Animal';
import Display from './Display';
import Name from './Name';

const Test4 = () => {
    const [name,setName] = useState('')
    const [animal,setAnimal] = useState('')
    const handleChange= (e) => {
        const {value} = e.target
        setAnimal(value)
    }
    return (
        <div>
         
          <Name name={name} onName={(e)=>setName(e.target.value)}/>
          <hr/>
          <Animal animal={animal} onAnimal={handleChange}/>
          <hr/>
          <Display name={name} animal={animal}/>
        </div>
    );
};

export default Test4;