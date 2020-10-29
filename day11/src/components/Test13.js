import React, { Component } from 'react';
import axios from 'axios'
class Test13 extends Component {

    state = {
        data:null
    }
    componentDidMount() {
        //this.getData1()
    }
    getData1 = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( resolve => {
            this.setState({
                data:resolve.data
            })
        })
    }
    getData2 = async()=> {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.setState({
            data : res.data
        })
       
    }
    render() {
        const {data} = this.state
        return (
        
            <div>
                <h2>외부 API 가져오기</h2>
                {
                    data && data[0].body
                }
                </div>
        );
    }
}

export default Test13;