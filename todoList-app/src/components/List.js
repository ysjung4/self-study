import React from 'react';
import Item from './Item';
import './List.css'


const List = ({todos,onRemove, onToggle}) => {
    return (
        <div className="List">
            <ul>
                {
                    todos.map(todo=><Item 
                        key={todo.no} 
                        todo={todo} 
                        onRemove={onRemove}
                        onToggle={ onToggle}/>)
                }
            </ul>
        </div>
    );
};

export default List;