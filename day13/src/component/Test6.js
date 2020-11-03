import React, { useState } from 'react';

const Test6 = (props) => {
    const [text,setText] =useState('초기값')
    const [color,setColor] =useState('red')
    const handleClick1=()=>{
        setText('홍길동 안녕')
    }
    const handleClick2=()=>{
        setText('강호동')
    }
    const handleClick3=()=>{
        setText('유재석')
    }
    const handleClick4=()=>{
        setText('김철수')
    }
    return (

        <div>
            <h2>useState practice</h2>
            <h1 style={{color:color}}>{text}</h1>
            <button onClick={handleClick1}>글자1</button>
            <button onClick={handleClick2}>글자2</button>
            <button onClick={handleClick3}>글자3</button>
            <button onClick={handleClick4}>글자4</button>
            <br/>
            <button onClick={()=>setColor('green')}>green</button>
            <button onClick={()=>setColor('pink')}>pink</button>
            <button onClick={()=>setColor('yellow')}>yellow</button>
            <button onClick={()=>setColor('blue')}>blue</button>
           
        </div>
        
    );
};

export default Test6;