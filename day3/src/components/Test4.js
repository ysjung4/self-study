import React, { Component } from 'react';

class Test4 extends Component {
    state = {
        name : '홍길동',
        age : 10,
        addr : '서울',

    }
    handleClick1 = () => {
        this.setState({
        name : '강호동',
        age : 30,
        addr : '제주'
        })
        }   
    handleClick2 = () => {
        this.setState({
            name : '유재석',
            age : 40,
            addr: '경기'
        })
    } 

   handleClick3 = () => {
       this.setState({
           name : '이효리',
           age: 20,
           addr : '제주'
       })
   }
    render() {
        const { name, age, addr} = this.state
        return (
            <div>
                <h2> 이름 : { name}</h2>
                <h2> 나이 : { age}</h2>
                <h2> 주소 : { addr}</h2>
                <button onClick={this.handleClick1}>확인</button>
                <button onClick={this.handleClick2}>확인</button>
                <button onClick={this.handleClick3}>확인</button>
                </div>
        );
    }
}

export default Test4;