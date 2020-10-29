import React, { Component } from 'react';
import Item from './Item';
import './List.css'
class List extends Component {

    render() {
        const {todos, remove, toggle} = this.props
            
        return (
            //주석처리 한번에 하기  ctrl+/
           <div className="List">
               <ul>
                   {
                       todos.map( todo => <Item key={todo.no} todo={todo}  
                        remove={remove} toggle = {toggle}/>)
                   }

                {/* {todos.map(todo=> <li key={todo.no}>
                       {todos.text}
                   </li>)} 
                   */}

                 

               </ul>
           </div> 
        );
    }
}

export default List;