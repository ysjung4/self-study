import React, { Component } from 'react';
import axios from 'axios'

class Test12 extends Component {
    state =  {
        data: null
    }

    componentDidMount() {
        this.handelLoad()
    }
    handelLoad = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                data : res.data
            })
        })
    }
    
    render() {
        const {data} = this.state
        return (
            <div>
                <h2></h2>
                { data && data[0].body}
            </div>
        );
    }
}

export default Test12;