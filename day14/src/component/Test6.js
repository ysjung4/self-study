import React, { useRef, useState } from 'react';

const Test6 = (props) => {
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
            userid: e.target.value
        })
    }
    const handlChange2 = (e) => {
        setNames({
            ...names,
            pwd: e.target.value
    })
    }
    const handlChange3 = (e) => {
        setNames({
            ...names,
            email: e.target.value
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
           <input type="text" onChange={handlChange1} value={userid} ref={idInput}/>
           <input type="text" onChange={handlChange2} value={pwd}/>
           <input type="text" onChange={handlChange3} value={email}/>
           <button onClick={handleClear}>지우기</button>
           <h2>{userid} / {pwd} /{email} </h2>
        </div>
        
    );
};

export default Test6;