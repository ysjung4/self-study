import React from 'react';
import Test3Sub from './Test3Sub';

const Test3 = () => {
    return (
        <div>
            <h2>props 연습</h2>
            <Test3Sub
            name='홍길동'
            age={20}
            addr="서울시 서초구"
            tel='000-000-000'
            color='pink'
            flag ={true}
            />
            <Test3Sub
            name='ggg'
            age={30}
            addr="서울"
            color="green"
            />
            <Test3Sub/>
        </div>
    );
};

export default Test3;