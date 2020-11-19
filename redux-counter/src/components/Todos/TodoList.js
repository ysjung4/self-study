import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({data}) => {
    return (
        <div>
           {
               data.map(item=> <TodoItem key={item.id} item={item}/> )
           }
        </div>
    );
};

export default TodoList;