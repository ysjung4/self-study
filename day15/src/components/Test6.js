import React, { useRef, useState } from 'react';

const Test6 = () => {
    const no = useRef(1)
    const textInput = useRef()
    const [text,setText] = useState('')
    const [items,setItems] = useState([])

    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setItems([
        ...items,{
            no: no.current++,
            text:text
        }   
        ])
        setText('')
        textInput.current.focus()
            }
    return (
        <div>
             <h4> 배열: 데이터 추가2 </h4>
             <form onSubmit={handleSubmit}>
             <input type="text" value={text} ref={textInput}
             onChange={handleChange} />
             <button type="submit">추가</button>
             </form>
             <ul>
                {
                    items.map(item=> <li key={item.no}>
                        {item.no}/{item.text}
                    </li>)
                }
             </ul>
        </div>
    );
};

export default Test6;