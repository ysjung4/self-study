import React, { Component } from 'react';

class Test3 extends Component {

    render() {
        const data = [
            {no:1, name : '유재석', age: 20, addr:'서울'},
            {no:2, name : '이효리', age: 20, addr:'제주'},
            {no:3, name: '엄정화', age: 20, addr: '경기'},
            {no:4, name:'제시', age:20, addr:'강원도'},
            {no:5, name:'화사', age:20, addr:'부산'},
        ]

        return (
            <div>
            <ul>
                <li> {data[0].no} / {data[0].name} / {data[0].age}/ {data[0].addr}</li>
                <li> {data[1].no} / {data[1].name} / {data[1].age} / {data[1].addr}</li> 

            </ul>
            <br/>
            <ul>
            {
            data.map(( item,index ) => {
        return (
                <li key={item.no}> {item.no}/ {item.name} / {item.age}/ {item.addr} </li>
                )
                 })
                }
            </ul>
            <br/>
            <ul>{
                data.map((item=> <li key={item.no}> {item.no}/{item.name}/ {item.age}/{item.addr}</li>))
                }
            </ul>
            </div>
        );
    }
}

export default Test3;