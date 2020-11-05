import React, { useState } from 'react';

const Test2 = () => {
    const [items,setItems] =useState([])//배열형
    const handleAdd = () => {
        setItems([
            ...items,
            {
                id:items.length,
                text:'Test'+Math.floor(Math.random()*20)
            }
        ])
    }
    return (
        <div>
            <h4> 배열 </h4>
            <button onClick={handleAdd}>추가하기</button>
            <ul>
                {
                     items.map(item=> <li key={item.id}>
                         {item.id}/{item.text}
                     </li>)
                }
            </ul>
        </div>
    );
};

export default Test2;