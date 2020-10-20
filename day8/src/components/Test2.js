import React, { Component } from 'react';
import './Test2.css'

class Test2 extends Component {
    state = {
        done : false
    }
    handleClick = () =>{
        const {done} = this.state
        this.setState({
            done : !done
        })
    }
    render() {
        return (
            <div>
                <p  className={`${this.state.done && 'on'}`} onClick={this.handleClick}>안녕</p>
            </div>
        );
    }
}

export default Test2;