import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import './Todos.css'
class Todos extends Component {
    no = 1
    state = { 
        todos: []
    }
    //데이터 todos 에 넣어주기
    //데이터 관리는 항상 메인에서
    handleInsert =  (text) => {
        const {todos} = this.state
        this.setState({
            todos: todos.concat ({no:this.no++, text:text})
        })
    }
    handleRemove = (id)=>{
        const {todos} = this.state
        this.setState({
            todos : todos.filter( todo => todo.no !==id)

        })
    }
    handleToggle = (id) => {
        const {todos} = this.state
        this.setState({
            todos : todos.map( todo => {
                if( todo.no ===id) {
                    return {
                        ...todo,
                        done : !todo.done
                    }
                } 
                return todo
                })
            })
        
    }
    render() {
        const { todos} = this.state
        return (
            <div className="Todos"> 
            <h1>TodoList</h1>
            <Form insert= {this.handleInsert} />
            <List todos = {todos} remove={this.handleRemove} toggle={this.handleToggle}/>
            
            </div>
        );
    }
}

export default Todos;