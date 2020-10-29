import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class Main extends Component {

    no = 1
    state = {
        data : []
    }
    handleInsert = ( text) => {
        const {data} = this.state
        this.setState({
            data : data.concat({no:this.no++, text })
        })

    }
    render() {
        const {data} = this.state
        return (
            <div>
            <Form onInsert={this.handleInsert}/>
            <List onData = {data}/>
            </div>
        );
    }
}

export default Main;