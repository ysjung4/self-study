import React, { useRef, useState } from 'react';

const Test8 = (props) => {
    const idInput = useRef()
    const [names,setNames] = useState({
        userid:'',
        pwd:'',
        email:''
    })
    //비구조할당
    const {userid,pwd,email} = names
    const handlChange = (e) => {
        setNames({
            ...names,
            [e.target.name] : e.target.value
        })
    }
   
    const handleClear =() => {
        setNames({
            userid:'',
            pwd:'',
            email:''
        })
        idInput.current.focus()
    }
    
    return (

        <div>
           <input type="text" onChange={handlChange} value={userid} ref={idInput} name="userid"/>
           <input type="text" onChange={handlChange} value={pwd} name="pwd"/>
           <input type="text" onChange={handlChange} value={email} name="email"/>
           <button onClick={handleClear}>지우기</button>
           <h2>{userid} / {pwd} /{email} </h2>
        </div>
        
    );
};

export default Test8;