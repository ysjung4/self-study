import React, { useState } from 'react';

const Test9 = (props) => {
    const [id,setId] = useState('')
    const [pass, setPass] = useState('')
    const [email,setEmail] = useState('')

    const handleChange1 =(e)=> {
        const {value} =e.target
        setId(value)
    }
    const handleChange2 =(e)=> {
        const{value} = e.target
        setPass(value)
    
    }
    const handleChange3 =(e)=> {
        const{value} = e.target
        setEmail(value)
    }
    const handleClear =(e)=> {
       setId('')
       setPass('')
       setEmail('')
    }
    return (
        <div>
            <input type='text' onChange={handleChange1}/>
            <input type='text' onChange={handleChange2}/>
            <input type='text' onChange={handleChange3}/>
            <button onClick={handleClear}>지우기</button>
            <h1>{id}/{pass}/{email}</h1>
        </div>
    );
};

export default Test9;