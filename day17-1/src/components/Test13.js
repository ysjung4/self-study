import React, { useCallback, useState } from 'react';
import Count from './Count';
import Title from './Title';

const Test13 = () => {
    const [age,setAge] = useState(10)
    const [money,setMoney] = useState(1000)

    const handleAge = useCallback(() => {
        console.log('age')
        setAge( age+1)
    },[])
    const handleMoney = useCallback(() => {
        console.log('money')
        setMoney( money+1000)
    },[])
    return (
        <div>
            <Title/>
            <Count text='나이' count={age}/>
            <button onClick={handleAge}>나이 증가</button>
             <Count text='급여' count={money}/>
            <button onClick={handleMoney}>급여 증가</button>
        </div>
    );
};

export default Test13;