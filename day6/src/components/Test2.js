import React, { Component } from 'react';

class Test2 extends Component {
    //클래스 영역에 고유번호 선언
    no = 1
    state = {
        data1: [],
        data2: [],
        data3: [],
        data4: []
    }

    handleClick1 = ( name) => {
        this.setState({
            data1 : this.state.data1.concat(name)
        })
    }
    handleClick2 = ( name, age) => {
        this.setState({
            //키와 값이 동일한 경우에는 하나만 작성해도 된다
            data2 : this.state.data2.concat({name, age })
        })
    }
    handleClick3 = ( ) => {
        this.setState({
            data3 : this.state.data3.concat({no: this.no ++})
        })
    }
    handleClick4 = () => {
        this.setState({
            data4: this.state.data4.concat({no: this.no++, name : '홍길동'+(Math.floor(Math.random()*10)),
            age:Math.floor(Math.random()*90) +10 })
        })
    }
    handleClick5 = (id) => {
        this.setState({
            data4 : this.state.data4.map( item => {
                if( item.no ===id ) {
                    return{
                        ...item, 
                        name : '이효리', age : 20
                    }
                } else {
                    return item
                }
            })
        })
    }
    handleClick6 = (id) => {
        this.setState({
            data4 : this.state.data4.map( item =>{
                if(item.no === id) {
                    return {
                        ...item,
                        name : '강호동',
                        age: 45
                    }
                }else {
                    return item
                }
            })

        })
    }
    handleClick7 = (id) => {
        this.setState({
            data4 : this.state.data4.map ( item => item.no === id ?
                { ...item, name:'유재석', age:30} : item
            )

        })
    }
    
    handleClick8 = (id) => {
        this.setState({
            data4 : this.state.data4.filter( item => item.no !== id)
        })
    }
    handleClick9 = (id) => {
        this.setState({
            data4 : this.state.data4.filter ( item => item.no !== id)
        })
    }
    render() {
        return (
            <div>
            <button onClick={ ()=>this.handleClick1('홍길동')}>홍길동</button>
            <button onClick={ ()=>this.handleClick2('홍길동',20)}>값추가</button>
            <button onClick={ this.handleClick3}>고유번호</button>
            <button onClick={ this.handleClick4}>데이터추가</button>
            <br/>
            <button onClick={ ()=>this.handleClick5(1)}>1번수정</button>
            <button onClick={ ()=>this.handleClick6(2)}>2번수정</button>
            <button onClick={()=>this.handleClick7(4)}>4번수정</button>
            <br/>
            <button onClick={() => this.handleClick8(2)}>2번 삭제</button>
            <button onClick={() => this.handleClick9(4)}> 4번 삭제</button>
            <hr/>
            <ul>
                {this.state.data4.map(item=> <li key={item.no}>
                    {item.no}/ {item.name} / {item.age}
                </li>)
                }
            </ul>
            </div>
        );
    }
}

export default Test2;