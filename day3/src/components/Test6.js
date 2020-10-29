import React, { Component } from 'react';
import './Test6.css'

class Test6 extends Component {
    state = {
        done : false 
    }
    handleClick1 = () => {
        this.setState  ({
            done : true
        })
    }
    
    handleClick2 = () => {
        this.setState({
            done : false
        })
    }
    
    handleClick3 = () => {
        this.setState ({
            done : !this.state.done
        })
    }
    render() {
        const { done } =this.state
        return (
            
           <div className="Test6">
               <h1> {this.state.done}</h1>
               <p> 테스트입니다</p>
               <p className='item'> 테스트입니다</p>
               <p className='item on'> 테스트입니다</p>
               <p className={this.state.done === true ? 'on' : null }>
                테스트입니다</p>

               <p className={this.state.done && 'on' }> 테스트입니다</p>
               <p>
                   <button onClick={this.handleClick1}>클래스 붙이기</button>
                   <button onClick={this.handleClick2}>클래스 떼기</button>
                   <button onClick={this.handleClick3}>클래스 토글</button>
                  
                  

               </p>
           </div> 
        );
    }
}

export default Test6;

//alt+shift 화살표아래 (아래로 붙여넣기)