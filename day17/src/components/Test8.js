import React, { useEffect, useRef } from 'react';

const Test8 = () => {
    const textRef = useRef()

    useEffect( ()=>{
        textRef.current.focus()
    },[])
    return (
        <div>
           <h4>08</h4> 
           <input type="text" ref={textRef} />
        </div>
    );
};

export default Test8;