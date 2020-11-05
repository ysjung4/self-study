import React, { useState } from 'react';


const Test5 = () => {
    //여러개일때
    const [names,setNames] =useState({
        first:'',
        last:''
    })

    const handleChange1 = (e) => {
       setNames({
           //기존값 가져오고 퍼스트만 수정하란 의미
           ...names,
           first: e.target.value
       })
    }
    const handleChange2 = (e) => {
        setNames({
            ...names,
            last:e.target.value
        
        })
    }
    return (
    
        <div>
      <h2>여러개 관리</h2>
            <input type="text" onChange={handleChange1}/>
            <input type="text" onChange={handleChange2}/>
            <h2>{names.first}/{names.last}</h2>
        
        </div>
        
    );
};

export default Test5;
