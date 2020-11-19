import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({data,remove}) => {
    return (
        <div>
           {
               data.map(item=> <TodoItem remove={remove} key={item.id} item={item}/> )
           }
        </div>
    );
};

export default TodoList;