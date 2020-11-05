import React, { useRef, useState } from 'react';

const Test1 = () => {
    const text1Input= useRef()
    const [names,setNames] = useState({
        text1:'',text2:'',text3:''
    })
    //names.text1, names.text2
    const {text1,text2,text3} = names
    const handleChange = (e) => {
        const {value,name} = e.target
        setNames ({
            ...names,
            [name]:value,
        })
    }
    const handleClear = () => {
        setNames({
            text1:'',text2:'',text3:''
        })
        text1Input.current.focus();
    }
    return (
        <div>
            <h4>input 처리하기</h4>
            <input type="text" ref={text1Input} value={text1} name="text1"onChange={handleChange} />
            <input type="text" value={text2} name="text2" onChange={handleChange}/>
            <input type="text" value={text3} name="text3" onChange={handleChange}/>
            <button onClick={handleClear}>지우기</button>

            <h2>{text1}/{text2}/{text3} </h2>
        </div>
    );
};

export default Test1;