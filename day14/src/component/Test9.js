import React, { useState } from 'react';

const Test9 = () => {
   
   const [items,setItems] = useState([])
   const handleAdd = () => {
       setItems([
           ...items,
           {id:items.length,
        text:'Test'+ (Math.floor(Math.random()*20)+1)}
       ])
   }
    return (
        <div>
            <h4>배열</h4>
            <button onClick={handleAdd}>add</button>
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

export default Test9;