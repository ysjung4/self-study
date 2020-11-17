import React, { useCallback, useMemo, useState } from 'react';

const Test12 = () => {
    const [text,setText] = useState('')
    const [data,setData] =useState([])
    
    const fontSize = useMemo( () => {
        return text.length
    },[])
    const handleClick = useCallback(() => {
        setData([
            ...data, text
        ])
    })

    return (
        <div>
            <input type='text' onChange={(e) => setText(e.target.value)}/>
            <button>추가</button>
            <h3 >텍스트길이 : {text.length}</h3>
            <hr/>
            <h2> 텍스트길이 : {fontSize}</h2>
            <h3> {data}</h3>
        </div>
    );
};

export default Test12;