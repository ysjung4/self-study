import React from 'react';
import './TodoItem.css'

const TodoItem = ({item}) => {
    return (
        <div>
            <p>
                {item.id}/ {item.text}
            </p>
        </div>
    );
};

export default TodoItem;