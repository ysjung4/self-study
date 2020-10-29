import axios from 'axios';
import React, { Component } from 'react';

class Test14 extends Component {
state = {
    data: null, loading : false
}
componentDidMount() {
    this.getData()
}
getData = async () => {
    //예외처리
    try{
        this.setState({
            loading:true
        })
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.setState({
            data: res.data
        })
    }catch(err) {
        console.log(err)
    }this.setState({
        loading:false
    })
}
    render() {
        const {data, loading} = this.state
        return (
            <div>
                {
                    loading && <h2>데이터를 읽고 있습니다</h2>
                }
                {
                    !loading && data && data.map( item=> <div key={item.id}>
                        <h3>  {item.title}</h3>
                        <p>{item.body}</p>
                           
            </div>)
    
    }
    </div>
          );
        }
    }

export default Test14;