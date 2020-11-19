import React from 'react';

const Color = ({color, red,pink,blue}) => {
    return (
        <div>
            <h2 style={{color:color}}>컬러: {color}</h2>
            <button onClick={red}>red</button>
            <button onClick={pink}>pink</button>
            <button onClick={blue}>blue</button>
        </div>
    );
};

export default Color; 