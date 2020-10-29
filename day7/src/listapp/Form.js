import React, { Component } from 'react';

class Form extends Component {
    inputtext = React.createRef()
    state = {
        text : ''
    }
    handleChange = (e) => {
        this.setState({
            text : e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {onInsert} = this.props
        const {text} = this.state
      onInsert( text)
      this.setState({
          text:''
      })
      this.inputtext.current.focus()
    }
    
    render() {
        const { text } = this.state
        return (
            <div>
             <form onSubmit={this.handleSubmit}>
                 <input type="text" ref={ this.inputtext}  value={text} onChange={this.handleChange} />
                 <button type="submit">추가</button>
             </form>
                </div>
        );
    }
}

export default Form;