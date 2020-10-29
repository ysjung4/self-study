import React, { Component } from 'react';

class Test3 extends Component {
    state = {
        data : [
            {no:1, name:'홍길동', age:20},
            {no:2, name:'aBc', age:20},
            {no:3, name:'강호동', age:20},
            {no:4, name:'김철수', age:20},
            {no:5, name:'DD', age:20},
            {no:6, name:'이효리', age:20},
            {no:7, name:'mmKKS', age:20},
            {no:8, name:'유재석', age:20},
            {no:9, name:'이수근', age:20},
        ],
        text:''
    }
    handleChange = (e) => {
        this.setState({
            text : e.target.value
        })
    }
    render() {
        const {data,text} = this.state
        const txt = data.filter( item => {
            const re = new RegExp( text,'ig')
            return item.name.match(re)
        } )
        return (
            <div>
                 <input type="text" value={text} onChange={this.handleChange}/>
                 <hr/>
                 {
                     txt.map( item=> <p key={item.no}>
                         {item.no} / {item.name}
                     </p>)
                 }
                 <hr/>
                 <ul>
                     {
                         data.map( item=> <li>
                             {item.no} / {item.name}
                         </li>)
                     }
                 </ul>
            </div>
        );
    }
}

export default Test3;