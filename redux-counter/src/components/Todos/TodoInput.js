import React from 'react';

const TodoInput = ({input,insert,changeInput}) => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        insert(input)
        changeInput('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input}
            onChange={(e)=>changeInput(e.target.value)}/>
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;