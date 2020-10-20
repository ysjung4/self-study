import React, { Component } from 'react';

class Test1 extends Component {
    render() {
        const title = '메세지입니다.'
        
        return (
            <div>
                <Test1Sub  msg = {title}     
                name = '홍길동'    
            />
                </div>
        );
    }
}



class Test1Sub extends Component {

    render() {
        return (
            <div>
                <h2>메세지 : { this.props.msg}</h2>
            <Test1SubSub msg = {this.props.msg}
         name = {this.props.name}
            /> 
            </div>
        );
    }
}



class Test1SubSub extends Component {

    render() {
        return (
            <div><h2>메세지 : { this.props.msg}</h2>
            <h2>{this.props.name}</h2>
            </div>
        );
    }
}


export default Test1;