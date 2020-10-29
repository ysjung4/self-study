import React, { Component } from 'react';
import Test2Sub from './Test2Sub';



class Test2 extends Component {

    render() {
        return (
            <div>
                <Test2Sub 
                name = ' 홍길동'
                age = {20}  
                tel = '00000'
                addr = '서울'
                done = { true }
                color = 'green'
                />
              <Test2Sub
              name = ' 강호동'
              age = {30}  
              tel = '00000'
              addr = '제주'
              done = { false}
              color = 'skyblue'
              />

              <Test2Sub
              name = ' 강호동'
              age = {30}  
              color = 'Pink'
              />
              <Test2Sub
             
              color = 'yellow'
              />
            </div>
        );
    } 
}

export default Test2;