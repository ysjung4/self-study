import React from 'react';

const Color = ({color,red,green,pink,blue,yellow}) => {
    return (
        <div>
            <h2 style={{color:color}}>Color: {color} </h2>
            <p>
                <button onClick={red}>Red</button>
                <button onClick={green}>Green</button>
                <button onClick={blue}>Blue</button>
                <button onClick={pink}>Pink</button>
                <button onClick={yellow}>Yellow</button>
                </p>
        </div>
    );
};

export default Color;
