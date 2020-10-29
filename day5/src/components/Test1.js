import React, { Component } from 'react';
import Test1Sub from './Test1Sub';

class Test1 extends Component {

    state = {
        message : 
            'Hello'
        }
    handleClick1 = () => {
        alert('확인')
    }
    
    handleClick2 = () => {
        this.setState({
            message : 'Hi'
        })
    }
    handleClick3  = (num) => {
        alert(num) 
    }
    handleClick4 = (name) => {
        alert(name)
    }
    handleClick5 = (age) => {
        alert(age)
    }
    render() {
        return (
            <div>
            <h1>최상위</h1>
            <hr/>
            <Test1Sub 
            msg = {this.state.message} 
            click1 = {this.handleClick1}
            click2 = {this.handleClick2} 
            click3 = {this.handleClick3}
            click4 = {this.handleClick4}
            click5 = {this.handleClick5}
            />
            </div>
        );
    }
}

export default Test1;