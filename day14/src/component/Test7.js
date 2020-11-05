import React, { useRef, useState } from 'react';

const Test7 = (props) => {
    const idInput = useRef()
    const [names,setNames] = useState({
        userid:'',
        pwd:'',
        email:''
    })
    //비구조할당
    const {userid,pwd,email} = names
    const handlChange1 = (e) => {
        setNames({
            ...names,
            [e.target.name] : e.target.value
        })
    }
    const handlChange2 = (e) => {
        setNames({
            ...names,
        [e.target.name]: e.target.value
    })
    }
    const handlChange3 = (e) => {
        setNames({
            ...names,
            [e.target.name]: e.target.value
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
           <input type="text" onChange={handlChange1} value={userid} ref={idInput} name="userid"/>
           <input type="text" onChange={handlChange2} value={pwd} name="pwd"/>
           <input type="text" onChange={handlChange3} value={email} name="email"/>
           <button onClick={handleClear}>지우기</button>
           <h2>{userid} / {pwd} /{email} </h2>
        </div>
        
    );
};

export default Test7;