import React from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos/Todos';
import {  remove, toggle, changeInput, insert } from '../store/modules/todos';



const TodosContainer = ( { input, data, remove, toggle, changeInput, insert }) => {
    return (
        <div>
            <Todos
            input={input}
            data={data}
            insert={insert}
            remove={remove}
            toggle={toggle}
            changeInput={changeInput}/>
        </div>
    );
};

//읽기
// const mapStateToProps = (state) => ({
//    input : state.todos.input,
//    data: state.todos.data
// })
//쓰기
// const mapDispatchToProps = (dispatch) => ({
//    insert : (text) => dispatch( insert(text) ),
//    remove : (id) => dispatch( remove(id) ),
//    toggle : (id) => dispatch( toggle(id) ),
//    changeInput : (text) => dispatch( changeInput(text) )
// })
export default connect(
    ({todos}) => ({
        input :todos.input,
        data:todos.data
     }),{insert,remove,toggle,changeInput}
    // mapStateToProps,
    // mapDispatchToProps
) (TodosContainer);