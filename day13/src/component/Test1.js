import React from 'react';
//함수형은 const 해야됨

const Test1 = () => {
    const msg = '안녕하세요 홍길동입니다. 지금은 연습중'
    const message = (len) =>{
        let str=''
        if(msg.length >len){
            str = msg.substr(0,len) + '...'
        }
        return str

    }
    const message1 = (len) => {
        let str=''
        if(msg.length>len){
            str =  msg.substring(0,len).trim() + '...'
        }
        return str
    }
    return (
        <div>
            
        <h2>함수 연습</h2>
        <p>{message(10)}</p>
        <p>{message1(10)}</p>
        </div>
    );
};

export default Test1;