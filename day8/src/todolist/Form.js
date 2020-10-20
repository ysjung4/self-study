import React, { Component } from 'react';
import './Form.css'
class Form extends Component {
    textInput = React.createRef()
    state = {
        text:''
    }
    handleChange = (e) => {
        const {value} = e.target
        this.setState({
            text: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.insert( this.state.text)
        this.setState({
            text:''
        })
        this.textInput.current.focus()

    }
    render() {
        const { text} = this.state
        return (
           <div className="Form">
               <form onSubmit={this.handleSubmit}>
                <p><input type="text" onChange={this.handleChange} value={text} ref={this.textInput}/>
                  <button>추가</button>  </p>   
               </form>
           </div> 
        );
    }
}

export default Form;