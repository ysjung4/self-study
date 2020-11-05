import React, { useState } from 'react';
//함수형은 const 해야됨

const Test1 = () => {
     const [text, setText] = React.useState('초기값')
     const [color,setColor] = useState('blue')
     const [count,setCount] = useState(0)
     
     const handleUp = () => {
         setCount(count+1)
     }
     const handleDown = () => {
         setCount(count-1)
     }
    return (
        <div>
        <h2>함수형 복습</h2>
        <p>
            <button onClick={()=>setColor('green')}>green</button>
            <button onClick={()=>setColor('red')}>red</button>
            <button onClick={()=>setColor('skyblue')}>skyblue</button>
            <button onClick={()=>setColor('pink')}>pink</button>
        </p>
        <p>
            <button onClick={()=>setText('홍길동')}>홍길동</button>
            <button onClick={()=>setText('이효리')}>이효리</button>
            <button onClick={()=>setText('유재석')}>유재석</button>
        </p>
        <p>
            <button onClick={handleUp}> UP</button>
            <button onClick={handleDown}> DOWN  </button>
           
        </p>
        <h3 style={{color:color}}>{text}/{color}/{count}</h3>
        </div>
    );
};

export default Test1;