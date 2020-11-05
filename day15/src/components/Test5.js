import React, { useRef, useState } from 'react';

const Test5 = () => {
    const no = useRef(1)
    const textInput = useRef()
    const [text,setText]= useState('')
    const [items,setItems] = useState([])

    const handleChange =(e) => {
        const {value} =e.target
        setText(value)

    }
    const handleAdd = ()=> {
        const newItems = items.concat({no:no.current++,text:text})
        setItems(newItems)
        setText('')
        textInput.current.focus()
    }
    return (
        <div>
            <h4> 배열: 데이터 추가1 </h4>
             <input type="text" ref={textInput} value={text} onChange={handleChange} />
             <button onClick={handleAdd} >추가</button>
             <ul>
                {
                    items.map(item=> <li key={item.no}>
                        {item.no}/{item.text}</li>)
                }
             </ul>
        </div>
    );
};

export default Test5;