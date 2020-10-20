import React, { Component } from 'react';

class Test5 extends Component {

    state = {
        username: '',
        userage: ''
    } 

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState ({
            [name]: value
        })
    }
   
   
    handleReset = () => {
        this.setState({
            username:'',
            userage:''
        })
    }
    render() {
        const  { username, userage} = this.state
        return (
            <div>
       
                <p> 이름:<input type="text" name='username'value={username}onChange={this.handleChange}/></p>
                <p> 나이:<input type="text" name='userage'value={userage} onChange={this.handleChange}/></p>
                <button onClick={this.handleReset}>초기화</button>
                <h3>이름 : {this.state.username} </h3>
                <h3>나이 : {this.state.userage} </h3>
            </div>
                // 생략할땐 반드시 state하고 같은 이름으로 해야함
        );
    }
}

export default Test5;