import React from 'react';


const ChangeColor = ({color,changeColor}) => {
    return (
        <div>
            <h1 style={{color,changeColor}}>Color: {color}</h1>
            <p>
            <button onClick={()=>changeColor('red')}>red</button>
            <button onClick={()=>changeColor('green')}>green</button>
            <button onClick={()=>changeColor('pink')}>pink</button>
            <button onClick={()=>changeColor('blue')}>blue</button>
            <button onClick={()=>changeColor('lime')}>lime</button>
            </p>
            <p>
            <button>red</button>
            <button>green</button>
            <button>pink</button>
            <button>blue</button>
            <button>lime</button>
            </p>
        </div>
    );
};

export default ChangeColor;