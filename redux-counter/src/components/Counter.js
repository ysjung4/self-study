import React from 'react';

const Counter = ({cnt,increment,decrement,color}) => {
    return (
        <div>
            <h1 style={{color:color}}>숫자: {cnt}</h1>
            <button onClick={increment}>증가하기</button>
            <button onClick={decrement}>감소하기</button>
        </div>
    );
};

export default Counter;