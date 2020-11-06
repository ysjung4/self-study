import React, { useEffect, useState } from 'react';

const Test1 = (e) => {
    const [count, setCount] = useState(0)
    const [text,setText] = useState('')

    const handleChange =(e)=> {
        setText(e.target.value)
    }
    /*
     useEffect(()=> {
    //     console.log('마운트/업데이트')
    // })
    
    useEffect(()=> {
        console.log('마운트')
    },[])
    */

    useEffect( ()=> {
        console.log('마운트와 특정대상 업데이트')
    }, [count,text])
    return (
        <div>
            <h4> useEffect </h4>
            <button onClick={()=>setCount(count+1)}>증가</button>
            <button onClick={()=>setCount(count-1)}>감소</button>
            <h1>숫자:{count}/텍스트:{text}</h1>
            <p>
                <input type="text" value={text}
                onChange={handleChange}/>
            </p>
        </div>
    );
};

export default Test1;