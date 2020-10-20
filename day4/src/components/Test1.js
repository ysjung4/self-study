import React, { Component } from 'react';

class Test1 extends Component {

    state = {
        name : '홍길동'
    }

    handleClick1 = () => {
        this.setState ({
            name : '유재석'
        })
    }
   
    handleClick2 = () => {
        this.setState ({
            name : '강호동'
        })
    }
    handleClick3 = () => {
        this.setState({
            name : '이효리'
        })
    }
    handleClick4 = ( num1, num2) => {
        alert( num1 + num2)
        }

    render() {

        return (
            <div>
                <h1>이름 : {this.state.name} </h1>
                <button onClick={this.handleClick1}>확인</button>
                <button onClick={this.handleClick2}>확인</button>
                <button onClick={this.handleClick3}>확인</button>
                <br/>
                <br/>
                <button onClick={
                    () => {
                        this.setState({
                            name : '제시'
                        })
                    }}
                >
                    콜백형식의 값처리</button>

                <br/>
                <br/>
              
          <button onClick={ this.handleClick4(10,30)}> 10.30 처리</button>
            </div>
        );
    }
}

export default Test1;