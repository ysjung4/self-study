import React, { Component } from 'react';
import './MusicApp.css'
class  MusicForm extends Component {
    state = {
        text:''
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })

    }
    render() {
        const {text}  = this.state
        return (
            <div className="MusicForm">
                <input type="text" placeholder="음악명을 검색하세요"
                onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default  MusicForm;