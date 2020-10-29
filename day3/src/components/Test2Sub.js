import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Test2Sub extends Component {

    render() {
        const {color, name, age, addr, tel, done} = this.props
        return (
            <div style={{border: '1px solid',
            borderColor: this.props.color, 
            padding: 15, marginBottom:20 }} >
                <p> 이름 : {name}</p>
                <p> 나이 : {age}</p>
                <p> 주소 : {addr}</p>
                <p> 전화번호 : {tel}</p>
                <p> color: {color}</p>
                <p> 논리: {done}</p>
                {
                  this.props. done === true?
                  <button>로그인</button>
                  : 
                  <button>로그아웃</button>
                }
                <br/>
                {
                    this.props.done && <button>로그인</button>
                }
                <br/>
                {
                    this.props.done||
                    <button>로그아웃</button>
                }



            </div>
        );
    }
}

Test2Sub.propTypes = {
name : PropTypes.string,
age : PropTypes.number,
addr : PropTypes.string.isRequired,
tel : PropTypes.string,
color : PropTypes.string,
done : PropTypes.bool



}


Test2Sub.defaultProps = {
    name :'이름',
    age : 0,
    addr : '대한민국',
    tel : '0000',
    done : false,
    color : 'yellow'
}
export default Test2Sub;