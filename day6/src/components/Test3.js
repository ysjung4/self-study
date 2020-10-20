import React, { Component } from 'react';

class Test3 extends Component {
    state = {
        username : ''
    }
    //event, eve, e 노상관
    handleChange = (e) => {
        this.setState({
            username : e.target.value
        })

    }
    render() {
        return (
            <div>
                <input type='text' onChange={this.handleChange} />
                <h2> 값 :{this.state.username} </h2>
            </div>
        );
    }
}

export default Test3;