import React, { useRef, useState } from 'react';

const Test4 = () => {
    const num = useRef(1)//초기값 선언

    const [items,setItems] = useState([])
    const handleAdd = () => {
        // setItems(items.concat({no:num.current++})) }
    setItems([
        ...items,{no:num.current++}
    ])
}
    return (
      
        <div>
             <h4> 배열: 고유번호 </h4>
            <button onClick={handleAdd} >추가하기</button>
            <ul>
                {
                     items.map(item => <li>
                         {item.no}
                     </li>)
                }
            </ul>
        </div>
    );
};

export default Test4;