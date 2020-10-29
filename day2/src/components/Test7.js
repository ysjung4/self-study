import React, { Component } from 'react';

class Test7 extends Component {

    render() {
        const name = "홍길동"
        return (
            <div>
       <Test7Sub myname = { name }    
                 title =  '신상명세서'
                 age = {20}
                 addr = '서울시'
                 tel = '00000'
                 done = { true }
       />
            </div>
        );
    }
}

class Test7Sub extends Component {

    render() {
       
        return (
            <div>
          <h1> { this.props.title} </h1>
            <h2>이름 : { this.props.myname } </h2>
            <p>나이 : { this.props.age} </p>
            <p>주소 : { this.props.addr} </p>
            <p>전화 : { this.props.tel} </p>
        {
            this.props.done === true?
            <button>로그인</button> :
            <button>로그아웃</button>
        }
            </div>

        
            
        );
    }
}


export default Test7;