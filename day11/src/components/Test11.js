import React, { Component } from 'react';
import axios from 'axios'
// axios 불러오기 

class Test11 extends Component {

    state = {
        data : null
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
                <p><button onClick={this.handelLoad}>데이터 불러오기</button></p>
                <textarea
                    cols = {80}
                    rows = {20}
                    readOnly ={true}
                    value={JSON.stringify(data, null, 2)}  
                />
            </div>
        );
    }
}

export default Test11;