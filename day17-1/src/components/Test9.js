import React, { useRef, useState } from 'react';

const Test9 = () => {
    const no = useRef(1)
    const [data, setData] = useState([])

    const handleClick = () => {
        setData([
            ...data ,
            {
                no : no.current++
            }
        ])
    }
    return (
        <div>
            <h4>Test9</h4>
            <button onClick={handleClick}>추가</button>
            <ul>
                {data.map( item => <li key={item.no}>
                    {item.no}
                </li>)}
            </ul>
        </div>
    );
};

export default Test9;