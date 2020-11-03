import React, { useState } from 'react';

const Test7 = (props) => {
    const [count, setCount] = useState(0)
    const handleUp = () => {
        setCount(count+1)

    }
    const handleDown = () => {
        setCount(count-2)

    }
    const handleUp2 = () => {
        setCount( prevCount => prevCount+1)

    }
    const handleDown2 = () => {
        setCount( state=> state-1)

    }
    const handleUp3 = () => {
      for(let i=0; i<5; i++){
      setCount(state=> state+1)
      }
    }
    const handleDown3 = () => {
        for(let i=0; i<3; i++){
        setCount( state=> state-1)
        }
    }
    return (
        <div>
            <h1>숫자 증가 감소 {count}</h1>
            <p>
                <button onClick={handleUp}>증가</button>
                <button onClick={handleDown}>감소</button>
                </p>
                <p>
                <button onClick={handleUp2}>증가</button>
                <button onClick={handleDown2}>감소</button>
                </p>
                <p>
                <button onClick={handleUp3}>증가</button>
                <button onClick={handleDown3}>감소</button>
               
            </p>
        </div>
    );
};

export default Test7;