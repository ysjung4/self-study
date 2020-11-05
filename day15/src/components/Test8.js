import React, { useRef, useState } from 'react';

const List = ({todos, onRemove}) => {
    return (
        <div>
            {
                todos.map(todo=> <Item todo={todo} key={todo.no}
                onRemove={onRemove}/>)
            }
        </div>
    );
};


const Item = ({todo,onRemove}) => {
    return (
        <div>
           <p>{todo.no}/{todo.text} <button onClick={()=>onRemove(todo.no)}>삭제</button></p>
        </div>
    );
};



const Form = ({onAdd}) => {
    const textInput = useRef()
    const [text, setText] =useState('')
    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        onAdd(text)
        setText('')
        textInput.current.focus()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={textInput} 
                value={text} onChange={handleChange}/>
                <button type="submit">추가</button>
            </form>
        </div>
    );
};


const Test8 = () => {
    const no = useRef(1)
    const [todos,setTodos] = useState([])

  const handleRemove=(id)=> {
      const newItems = todos.filter(todo=> todo.no !==id)
      setTodos(newItems)
  }
    const handleAdd =(text) => {
        setTodos([
            ...todos,
            {
                no: no.current++,
                text: text
            }
        ])
    }
    return (
        <div>
            <h4> todoList 테스트 </h4> 
            <Form onAdd={handleAdd}/>  
            <hr/>         
            <List todos={todos} onRemove={handleRemove}/>
        </div>
    );
};

export default Test8;