import  React, { useRef, useState } from 'react'
import './Todo.css'
import Form from './Form';
import List from './List';

const Todo = () => {    
    const no = useRef(1)//초기번호
    const [todos,setTodos] = useState([])
    const handleInsert =(text) => {
        // setTodos( todos.concat({no:no.current++,text}))
        setTodos([
            ...todos,
            {
                no:no.current++,
                text,
                done:false
            }
        ])
    }
    const handleRemove = (id) => {
        const newItem = todos.filter(todo => todo.no !== id)
        setTodos(newItem)
    }

    // const handleToggle =(id) => {
    //     const newItem =todos.map(
    //         todo=> todo.no === id? {...todo,done:!todo.done}: todo )
    //                                setTodos(newItem)
    // }
    const handleToggle = (id) => {
    setTodos( todos.map (todo => {
        if(todo.no ===id) {
            return{
                ...todo,
                done: !todo.done
            }
        } return todo
    }))
    }
    return (
        <div className="Todo">
            <h1>Todo List</h1>
            <Form onInsert={handleInsert} />
            <List todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
        </div>
    );
};

export default Todo;