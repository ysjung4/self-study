import React, { useState } from 'react';

const Test2 = () => {
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    
    const handleChange = (e) => {
        const {value} = e.target
        setLastname( value)
    }
    const handleClear =() => {
       setFirstname('')
       setLastname('')
    }
    return (
        <div>
            <input type='text' value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
            <input type='text' value={lastname} onChange={handleChange}/>
           <button onClick={handleClear}>지우기</button>
            <h2>FirstName : {firstname}</h2>
            <h2>LastName : {lastname}</h2>
        </div>
    );
};

export default Test2;