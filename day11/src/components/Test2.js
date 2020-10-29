import React, { Component } from 'react';
import cat0 from './images/cat0.jpg'
import cat1 from './images/cat1.jpg'
import bg from './images/bg.jpg'


class Test2 extends Component {
    render() {
        const style1 = {
            width:500,
            height:200,
            background:'skyblue'
        }
        return (
            <div>
                <div style={style1}></div>

                {/* 인라인방식은 {{}} 이렇게 사용하고 문자열은 ''안에 적용해야 한다. */}
                <div style={{width:'100%', height:700, backgroundPosition:'0,0',
            backgroundImage:'url('+bg+')',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat'
            }}></div>
                <img src="/images/cat2.jpg"></img>
                <img src={cat0}></img>
                <img src={cat1}></img>
            </div>
        );
    }
}

export default Test2;