import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class Test1 extends Component {
    state = {
        data : [
            {no:1, name:'홍길동', tel:'000-0000-0000', addr:'서울'},
            {no:2, name:'홍길동', tel:'000-0000-0000', addr:'서울'},
            {no:3, name:'홍길동', tel:'000-0000-0000', addr:'서울'},
            {no:4, name:'홍길동', tel:'000-0000-0000', addr:'서울'},
            {no:5, name:'홍길동', tel:'000-0000-0000', addr:'서울'},
            {no:6, name:'홍길동', tel:'000-0000-0000', addr:'서울'},
            {no:7, name:'홍길동', tel:'000-0000-0000', addr:'서울'},
            {no:8, name:'홍길동', tel:'000-0000-0000', addr:'서울'},
            {no:9, name:'홍길동', tel:'000-0000-0000', addr:'서울'},
            {no:10, name:'홍길동', tel:'000-0000-0000', addr:'서울'},
        ]

    }
    render() {
        const {data} =this.state
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>전화</th>
                            <th>주소</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            data.map(item =>  <tr key={item.no}>
                                <td>{item.no}</td>
                                <td>{item.name}</td>
                                <td>{item.tel}</td>
                                <td>{item.addr}</td>
                            </tr>)
                        }
                       
                    </tbody>
           
                    
                </Table>               
            </div>
        );
    }
}

export default Test1;