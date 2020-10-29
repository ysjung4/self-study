import React, { Component } from 'react';

class Test6 extends Component {

    render() {
        const done = true
        return (
            <div>
                {done === true ? <button>로그인</button>:<button>로그아웃</button>}
                <br/> <br/>
                {

                done ? <button>로그인</button> :<button>로그아웃</button>
                }
                <br/> <br/>
                {/* true && 결과값*/}
                {
                    done && <button>로그인</button>
                }
                {/* falese || 결과값*/}
                {
                done || <button>로그아웃</button>


                }
                
            </div>
        );
    }
}

export default Test6; 