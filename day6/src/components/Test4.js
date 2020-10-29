import React, { Component } from 'react';

class Test4 extends Component {

    state = {
        userid : '',
        userpw : '',
        email : ''
    }

  /* handleChange = (e) => {
        this.setState({
        [e.target.name] : e.target.value
        //['userid] 와 같음
        })
    
*/ 

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({
        [name] :value
        //['userid] 와 같음
        })
    }

    handleReset = () => {
        this.setState({
            userid:'',
            userpw:'',
            email:''

        })
    }
    render() {

        
        return (
            <div>
                <p>
                <input type="text" name='userid'value={this.state.userid} onChange={this.handleChange}/>
                <input type="text" name='userpw'value={this.state.userpw}onChange={this.handleChange}/>
                <input type="text" name='email' value={this.state.email}onChange={this.handleChange}/>
                <br/>
                <button onClick={this.handleReset}>초기화</button>
             
                </p>
                <h2>아이디 : {this.state.userid} </h2>
                <h2>비밀번호 : {this.state.userpw}</h2>
                <h2>이메일 : {this.state.email} </h2>
            </div>
        );
    }
}

export default Test4;