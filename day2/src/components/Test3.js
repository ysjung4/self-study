import React, { Component } from 'react';

class Test3 extends Component {

    render() {
        const title ='신상명세서'
        const name = '홍길동'
        const age = 20
        const addr = '서울시 서초구'
        const sex = '남자'
        let tel = '00000'
        return (
            <div>
            <h2>{title}</h2>
            <ul>
                <li>이름 : {name}</li>
                <li>age : {age}</li>
                <li>주소 : {addr}</li>
                <li>성별 : {sex}</li>
                <li>연락처 : {tel}</li>
                </ul>
               
            
            </div>
        );
    }
}

export default Test3;