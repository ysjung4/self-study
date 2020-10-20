import React, { Component } from 'react';

class Test5 extends Component {

    state = {
        color : '#f00',
        done:false
    }
    handleColor = () => {
        
        this.setState({
            color : '#'+Math.floor(Math.random() *16777215).toString(16)
        })
            
    }
    handleToggle = () => {
        const { done} = this.state
        this.setState({
            done : !done
        })
    }
    render() {
        const { color,done} = this.state
        return (
            <div>
                <button onClick={this.handleColor}>랜덤컬러</button>
                <button onClick={this.handleToggle}>보이기/숨기기</button>
                <h2 style={{color:color}}>컬러</h2>
                <hr/>
                {
                    done &&  <Visble color = {color}/>
                }
             
                
            </div>
        );
    }
}

class Visble extends Component {
constructor(props) {
    super(props)
    this.state = {
        count : 0
    }
    this.up = this.up.bind(this)
    this.down = this.down.bind(this)
    console.log('1. constructor')
}
shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return nextState.count % 5 !==0
}

up = () => {
this.setState({
    count : this.state.count+1
})
}
down = () => {
    const {count} = this.state
    this.setState({
        
        count : count-1
    })
}
componentWillUnmount(){
    console.log('5.componentWillUnmount')
} //나갈때

componentDidMount() { //렌더후
    console.log('3.componentDidMount')
}
componentDidUpdate(prevProps, prevState) { //업데이트후
    console.log('4.componentDidMount')
}


    render() {
        console.log('2.render')
        const {count} = this.state
        const {color} = this.props
        return (
            <div> <h1 style={{color:color}}>자식 : {count}</h1>
            <button onClick={this.up}>증가</button>
            <button onClick={this.down}>감소</button>
            </div>
        );
    }
}
export default Test5;