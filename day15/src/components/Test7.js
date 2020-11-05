import React, { useRef, useState } from 'react';

const Test7 = () => {
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
    const handleRemove = (id) => {
        setItems(items.filter(item=> item.no!== id))
    }
    return (
        <div>
             <h4> 배열: 데이터 추가/삭제 </h4>
             <form onSubmit={handleSubmit}>
             <input type="text" value={text} ref={textInput}
             onChange={handleChange} />
             <button type="submit">추가</button>
             </form>
             <ul>
                {
                    items.map(item=> <li key={item.no}>
                        {item.no}/{item.text}
                        <button onClick={()=>handleRemove(item.no)}>삭제</button>
                    </li>)
                }
             </ul>
        </div>
    );
};

export default Test7;