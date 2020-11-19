import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
    return (
        <div>
            <h2>TODO LIST</h2>
            <TodoInput/>
            <TodoList/>
        </div>
    );
};

export default Todos;