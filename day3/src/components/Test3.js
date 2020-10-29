import React, { Component } from 'react';

class Test3 extends Component {

     handleClick = () => {
    alert('TEST1')
     }
     handleClick2 = () => {
         alert('TEST2')
     }
     handleClick3 = () =>{
         alert('TEST3')

     }
     handleClick4 = ( num1, num2) => {
         alert( num1 + num2 )
     }
    render() {
        return (
           <div>
               <button onClick={ this.handleClick}>확인</button>
               <button onClick={ this.handleClick2}>확인</button>
               <button onClick={ this.handleClick3}>확인</button>
               <br/>
               <br/>
               <button onClick={
                   () => {
                       alert('나는 콜백함수형')
                   }
               }>확인</button>
               <br/>
               <br/>
               <button onClick={this.handleClick4(10,20)}>확인</button>
           </div> 

        );
    }
}

export default Test3;