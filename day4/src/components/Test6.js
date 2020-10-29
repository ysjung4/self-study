import React, { Component } from 'react';
import Test6Sub from './Test6Sub';
import Test6SubSub from './Test6SubSub';

class Test6 extends Component {

// 클래스영역일땐 무조건 this 붙이기! 
//데이터 값을 바꿀땐 state, 전달할땐 props

    state = {
        name: '테스트',
        age: 20
    }

    handleClick1 = () => {
        this.setState({
            name:'홍길동',
            age: 30
        })
    }

    handleClick2 = () =>{
        this.setState({
            name: '나는 서브',
            age: 15
        })
    }

    handleClick3 = () => {
        this.setState({
            name: '나는 서브서브',
            age:40
        })
    }
    render() {
        return (
            <div>
                <h1>Test6 : {this.state.name}/{this.state.age}</h1>
                <button onClick={this.handleClick1}>확인</button>
                <br/>

                <Test6Sub onName = {this.state.name}
                          onAge = {this.state.age}
                          onHandle = {this.handleClick2} 
                          onSub = {this.handleClick3}/>
                 
             
            </div>
        );
    }
}

export default Test6;