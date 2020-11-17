import React, { useEffect, useState } from 'react';

const Test1 = () => {
    const [visible , setVisible] = useState(true)
    const handleToggle = () => {
        setVisible( !visible )
    }
    return (
        <div>
            <button onClick={handleToggle}>보이기/숨기기</button>
            <hr/>
           { visible && <Mouse /> } 
        </div>
    );
};

export default Test1;

const Mouse = () => {
    const [x, setX] = useState(0)
    const [y, setY ] = useState(0)

    const make = (e) => {
        setX( e.clientX )
        setY( e.clientY )
    }

    useEffect( () => {
        console.log( 'useEffect') 
        window.addEventListener('mousemove', make )
        return() => {
            window.removeEventListener('mousemove', make )
        }
    },[])

    return (
        <div>
            <h3> 마우스 위치 </h3>
            <h1> {x} / {y}  </h1>
        </div>
    );
};
