import React, { useState } from 'react';

const Test3 = () => {
    const [items,setItems] = useState([])
    const handleAdd = () => {
        const names='호동,이젠,철수,민혁,아름,다운,유진,훈,수진,예진,인영,지훈,동현,기호,승현,나연,다영,재인,구영,미나,서연,지우,지아,민준,건우,나은'.split(',')//alt+z

        setItems([ 
            ...items,
            {
            id:items.length,
            text:names[Math.floor(Math.random()*names.length)]
        }
    ])
    }
    return (
        <div>
             <h4> 배열 :이름추가 </h4>
            <button onClick={handleAdd} >추가하기</button>
            <ul>
                {
                     items.map(item=><li key={item.id}>
                         {item.id}/{item.text}
                     </li>)
                }
            </ul>
        </div>
    );
};

export default Test3;