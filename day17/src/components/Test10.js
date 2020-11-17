import React, { useEffect, useRef, useState } from 'react';

const Test10 = () => {
    const [timer,setTimer] = useState(1)
    const textRef = useRef(null)
    const [play, setPlay] = useState(false)

    useEffect (()=> {
        setInterval(()=>{
            setTimer( timer+1)
        },1000)
        return () =>{
            clearInterval(textRef.current)
        }
    },[])
    return (
        <div>
            <button onClick={()=>clearInterval(textRef.current)}>타이머 중지</button>
            <button onClick={()=>setPlay(!play)}>타이머 시작</button>
            <h1>{timer}</h1>
        </div>
    );
};

export default Test10;