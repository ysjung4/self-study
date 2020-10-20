import React, { Component } from 'react';
import './Test4.css';
class Test4 extends Component {

    render() {
        const data = [
            {no:1, name : '유재석', age: 20, addr:'서울', done:true},
            {no:2, name : '이효리', age: 20, addr:'제주', done:true},
            {no:3, name: '엄정화', age: 20, addr: '경기',done:false},
            {no:4, name:'제시', age:20, addr:'강원도',done:false},
            {no:5, name:'화사', age:20, addr:'부산',done:true},
        ]
        return (
           <div className="Test4">
              <table>
                  <caption></caption>
                  <colgroup>
                  <col  className="no"/>
                  <col  className="name"/>
                  <col  className="age"/>
                  <col  className="addr"/>
                  <col  className="done"/>
              
                  </colgroup>
                  <thead>
                      <tr>
                          <th>번호</th>
                          <th>이름</th>
                          <th>나이</th>
                          <th>주소</th>
                          <th>참여여부</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          data.map(item =>
                              <tr key={item.no}>
                              <td>{item.no}</td>
                              <td>{item.name}</td>
                              <td>{item.age}</td>
                              <td>{item.addr}</td>
                              <td>{item.done === true? '참여':'미참여'}</td>
                          </tr> )
                      }




                     {/*<tr>
                          <td>{data[0].no}</td>
                          <td>{data[0].name}</td>
                          <td>{data[0].age}</td>
                          <td>{data[0].addr}</td>
                          <td>{data[0].done}</td>
                      </tr>
                     */}
                  </tbody>
              </table>
              <br/>
              <br/>
              <br/>
              <button onClick={this.handleClick1}>3번삭제</button>
              <button onClick={this.handleClick2}>4번삭제</button>

           </div> 
        );
    }
}

export default Test4;