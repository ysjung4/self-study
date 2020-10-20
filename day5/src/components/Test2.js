import React, { Component } from 'react';
import './Test3.css'
class Test2 extends Component {

    state = {
        data : [
            {no:1, name:'유재석', age:20},
            {no:2, name:'이효리', age:30},
            {no:3, name:'엄정화', age:10},
            {no:4, name:'제시', age:40},
            {no:5, name:'화사', age:25}
        ] 
    }
    handleClick1 = () =>{
        this.setState({
            data : this.state.data.filter( item=> item.no !==2 )

        })
    }
    handleClick2 = () =>{
        this.setState({
            data : this.state.data.filter(item => item.no !==3)
        })
    }
    handleClick3 = () =>{
        this.setState({
            data : this.state.data.filter( item => item.no !==4)
        })
    }
    handleClick4 = (id) =>{
        this.setState({
            data : this.state.data.filter( item => item.no !== id)
        })
    }
    handleClick5 = (num ) => {
        this.setState({
            data : this.state.data.filter(item => item.no !== num)
        })
    }
    handleClick6 = (id) => {
        this.setState({
            data : this.state.data.map(item => {
                if(item.no === id) {
                    return {
                        ...item,
                        name : '강호동',
                        age: 20
                    }
                } else {
                    return item
        
            }
        })
    })
    }
    handleClick7 = (id) => {
        this.setState({
            data : this.state.data.map(item =>
              item.no === id ? {...item, name:'김종민', age: 45}  : item
            )
        })
    }
 
    render() {
        return (
            <div>
                <ul>
                    { //고유값있으면 index 생략가능
                        this.state.data.map(item =>
                        <li>
                            {item.no}/{item.name}/{item.age}
                            </li>)
    }
    
                    </ul>
                    <hr/>
                    <p>
                    <button onClick={this.handleClick1}> 2번삭제</button>
                    <button onClick={this.handleClick2}> 3번삭제</button>
                    <button onClick={this.handleClick3}> 4번삭제</button>
                   
                </p>
                <p>
                    <button onClick={ () =>this.handleClick4(1)}>1삭제</button>
                    <button onClick={()=> this.handleClick5(3)}>3삭제</button>
                </p>
                <p>
                    <button onClick={()=> this.handleClick6(4)}>이름, 나이 변경</button>
                    <button onClick={()=> this.handleClick7(2)}>이름, 나이 변경</button>
                    
                </p>
                </div>
                
        );
    }
}

export default Test2;