import React, { Component } from 'react';

class Test3 extends Component {

    inputText = React.createRef()

    state = {
        done : false
    }
    handleToggle = () => {

        const value=this.inputText.current.value
        const isDone = this.state.done

        this.inputText.current.value = isDone ? value.toLowerCase() : value.toUpperCase()
        this.setState({
            done : !isDone
        })
        }
    render() {
        return (
            <div>
             <input type="text" ref={this.inputText } />
             <button onClick={this.handleToggle}>변환</button> 
            </div>
        );
    }
}

export default Test3;