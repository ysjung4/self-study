import React, { Component } from 'react';

class Test1 extends Component {
state = {
    count : 0
}

handleUp1 = () => {
 this.setState({
     count : this.state.count +1
 })
}
handleDown1 = () => {
    this.setState({
        count : this.state.count -1
    })
}

handleUp2 = () => {
    this.setState(( prevState, props )=>{
        return {
            count : prevState.count +1

        }
    })
   }
   handleDown2 = () => {
       this.setState( (state) => {
           return {
               count : state.count1 -1
           }
       })
   }
   handleUp3  = () => {
       this.setState({
           count : this.state.count +1
       }, () => this.setState({
           count : this.state.count +1
       }))
   }
   
   handleDown3 = () =>{
       this.setState((state ) => {
           return {
               count : state.count +1
           }
       })

       handleUp4 = ( ) => {
           this.setState( (state) => {
               return{
                   count : state.count+1
               }
           })
       this.setState((state) => {
           return {
               count : state.count +1
           }
       })
    }
    handleDown4 = () => {
        
    }
        return (
            <div>
                <h2>count : {this.state.count} </h2>
                <p>
                    <button onClick={this.handleUp1}>증가</button>
                    <button onClick={this.handleDown1}>감소</button>
                </p>
                <p>
                    <button onClick={this.handleUp2}>증가</button>
                    <button onClick={this.handleDown2}>감소</button>
                </p>
                <p>
                    <button onClick={this.handleUp3}>2 증가</button>
                    <button onClick={this.handleDown3}>2 감소</button>
                </p>
                <p>
                    <button onClick={this.handleUp4}>2 증가</button>
                    <button onClick={this.handleDown4}>2 증가</button>
                </p>
            </div>
        );
    }
}

export default Test1;