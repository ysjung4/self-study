import React, { Component } from 'react';

class Test4 extends Component {

    render() {
        const name = "홍길동"
        const message = "실명"
        const age = 20
        const style1 = {
            color:'red', backgroundColor: 'pink',
            width:700, height:200, fontSize:50,
            lineHeight:2
        
        }
        const style2 = {
            color:'red', backgroundColor: 'pink',
            width:700, height:200, fontSize:50,
            lineHeight:2
        }

        return (
            <div>
                
        <p style={style1}> 이름: {name} </p>
        <p style={style2}> 나이: {age} </p>
            </div>
        );
    }
}

export default Test4;