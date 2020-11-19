import React from 'react';
import { remove } from '../../store/modules/todos';
import './TodoItem.css'

const TodoItem = ({item,remove}) => {
    return (
        <div>
            <p>
                {item.id}/ {item.text}
                <button onClick={()=>remove(item.id)}>Remove</button>
            </p>
        </div>
    );
};

export default TodoItem;