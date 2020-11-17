import React, { useMemo, useState } from 'react';

const Test11 = () => {
    const [cnt1,setCnt1] = useState(0)
    const [cnt2,setCnt2] = useState(0)
    
    const isEven =  useMemo(() => {
        //함수를 별도 만들어서 return 처리할때 (return 기억)
        console.log('test')
        return cnt1 % 2 ===0
    })
    return (
        <div>
            <h2>{cnt1}</h2>
            <button onClick={()=>setCnt1(cnt1+1)}>증가</button>
            <h2>{cnt2}</h2>
            <button onClick={()=>setCnt2(cnt2+1)}>증가</button>
            <hr/>
            <h3>{isEven ? '짝수':'홀수'}</h3>
            
        </div>
    );
};

export default Test11;