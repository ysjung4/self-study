import React, { useEffect, useRef, useState } from 'react';

const Test10 = () => {
    const [timer , setTimer] = useState(1)
    const textRef = useRef(null)

    useEffect( () => {
        textRef.current  =  setInterval( () => {
            setTimer( timer + 1 )
        } , 1000)
        return() => {
            clearInterval(textRef.current )
        }
    })
    return (
        <div>
            <button onClick={() => clearInterval(textRef.current)}>타이머중지</button>
            <button>타이머시작</button>
            <h1> {timer}  </h1>
        </div>
    );
};

export default Test10;