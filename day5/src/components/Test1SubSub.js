import React, { Component } from 'react';

class Test1SubSub extends Component {

    render() {
        const { msg, click1, click2} = this.props
        return (
        <div>
        <h2>자손</h2>
        <h2>message : {msg}</h2>
        <button onClick={click1}>확인</button>
        <button onClick={click2}>메세지 변경</button>
        <button onClick={ () => this.props.click3(10)}> 10 출력</button> 
        <button onClick={ () => this.props.click4('연서')}> 이름 출력</button>  
        <button onClick={() => this.props.click5(27)}> 나이 출력 </button> 
        <hr/>
        
            </div>
        );
    }
}

export default Test1SubSub;