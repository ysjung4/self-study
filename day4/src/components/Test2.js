import React, { Component } from 'react';

class Test2 extends Component {

    render() {
        var arr = ['유재석','이효리','제시','엄정화','화사']
        return (
            <div>
                <h2>환불원정대</h2>
                <p>{arr[0]}</p>
                <p>{arr[1]}</p>
                <p>{arr[2]}</p>
                <p>{arr[3]}</p>
                <p>{arr[4]}</p>
                <hr/>
                <ul>
                    {
                        arr.map( (item,index)=>{
                            return(<li key={index}> {item} </li>)
                        } )
                    }
                </ul>
                <br/>
                <ul>
                    {
                        arr.map( (item,index) => 
                        <li> key={index} {index}/ {item} </li>)
                    }

                </ul>
            </div>
        );
    }
}

export default Test2;