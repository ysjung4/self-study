import React, { Component } from 'react';
import Test1SubSub from './Test1SubSub';

class Test1Sub extends Component {

    render() {
        const { msg,click1,click2} = this.props
        return (
            <div>

               <h2>자식</h2>
               <h2>message : {msg}</h2>
               <button onClick={click1}>확인</button>
               <hr/>
               <Test1SubSub 
               msg = {msg}
               click1 = {click1}
               click2 = {click2} 
               click3 = {this.props.click3} 
               click4 = {this.props.click4}
               click5 = {this.props.click5}  
               />
            </div>
        );
    }
}

export default Test1Sub;