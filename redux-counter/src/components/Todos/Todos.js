import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = ( { input, data, remove, toggle, changeInput, insert }) => {
    return (
        <div>
            <h2>TODO LIST</h2>
            <TodoInput input={input} changeInput={changeInput} insert={insert}/>
            <TodoList data={data}/>
        </div>
    );
};

export default Todos;