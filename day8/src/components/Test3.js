import React, { Component } from 'react';

class Test3 extends Component {
    state = {
        username : '', password:''
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }
    render() {
        const { username, password} = this.state
        return (
            <div>
                <input type="text" value={username} name="username" onChange={this.handleChange}/>
                <input type="text" value={password} name="password" onChange={this.handleChange}/>
                {
                    password.length > 6 ?
                    <button disabled>비활성</button> : <button>활성</button>
                }
                <button disabled={password.lenght>6 && true}>버튼</button>
                <p> { password.length}</p>
            </div>
        );
    }
}

export default Test3;