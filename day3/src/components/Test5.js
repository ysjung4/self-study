import React, { Component } from 'react';

class Test5 extends Component {
    state = {
        name : '',
        age : 0,
        color : 'red'
    }

    handleClick1 = () => {
        this.setState ({
            name : '강호동',
            age : 10,
            color : 'black'
        })
    }
    
    handleClick2 = () => {
        this.setState ({
            name : '유재석',
            age : 20,
            color : 'green'

        })
    }

    handleClick3 = () => {
        this.setState ({
            name: '이효리',
            age : 25,
            color : 'blue'
        })
    }

    handleReset = () =>{
        this.setState({
            name : '',
            age : 0,
            color : '#0000'
        })
    }

    render() {
        return (
            <div>
                <h2 style={{color:this.state.color}}>
                    {this.state.name } 
                    / {this.state.age}
                    </h2>
                    <p>
                    <button onClick={this.handleClick1}>확인</button>
                    <button onClick={this.handleClick2}>확인</button>
                    <button onClick={this.handleClick3}>확인</button>
                    <button onClick={this.handleReset}>초기화</button>
                    </p>
                    <button onClick={
                        () => {
                            this.setState({
                                name : '이철수',
                                age : 20,
                                color : 'orange'
                            })
                        }
                    }>
                  콜백 함수형으로 작성</button>
                   
            </div>
        );
    }
}

export default Test5;