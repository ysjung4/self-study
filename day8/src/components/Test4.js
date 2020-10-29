import React, { Component } from 'react';

class Test4 extends Component {
 constructor(props){
     super(props)
     this.state = {
         count : 0
     }
     this.handleUp = this.handleUp.bind(this)
     this.handleDown = this.handleDown(this)
 }
 handleUp = () =>{
     const {count} = this.state
     this.setState({
         count : count +1
     })
 }
 handleDown = () => {
     const {count} = this.state
     this.setState({
         count : count -1
     })
 }
 componentDidMount() {
     console.log('3. componentDidMount')
     
 }
 componentDidUpdate(prevProps, prevState) {
     console.log('4. componentDidMount')
 }
 
    render() {
        console.log('2.render')
        const { count} = this.state
        return (
            <div><button onClick={this.handleUp}>증가</button>
            <button onClick={this.handleDown}>감소</button>
            <h1>숫자 :{count} </h1></div>
        );
    }
}

export default Test4;