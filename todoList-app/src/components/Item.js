import React from 'react';
import './Item.css'

const Item =({todo,onRemove,onToggle}) => {
    return (
        <>
            <li className="Item">
                <span onClick={()=>onToggle(todo.no)}
                    className={`${todo.done && 'on'}`}> &#10003;  </span>

                <em onClick={()=>onToggle(todo.no)}
                className={`${todo.done && 'on'}`}> {todo.text}  </em> <button onClick={()=>onRemove(todo.no)}>삭제</button>
            </li>
        </>
    );
};

export default Item;