import React, { useState } from 'react';

const Test8 = (props) => {
    const [text,setText] = useState('')
    const handleChange = (e) =>{
        setText(e.target.value)

    }
    const handleClear = () => {
        setText('')
    }
    return (
        <div>
            <input type='text'
            onChange={handleChange}/>
            <button onClick={handleClear}>지우기</button>
             <h2>{text}</h2>
        </div>
    );
};

export default Test8;