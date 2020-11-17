import React, { useReducer, useState } from 'react';
//순수 자바스크립트 함수

const initalState = 0
const reducer = ( state,action) => {
    switch(action.type){
        case 'INCREMENT':
            return state+1
            case 'DECREMENT':
                return state-1
                case 'RESET':
                    return 0
                    default :
                    return state
    }
}
//증가 INCREMENT,  감소 DECREMENT, 초기화  RESET -> 
//action.type : 사용자 정의 대문자로 작성한다

const Test14 = () => {
  
    const [cnt,dispatch] =useReducer( reducer,initalState)
    
     return (
        <div>
            <h2>{cnt}</h2>
            <p>
            <button onClick={()=>dispatch({type:'INCREMENT'}) }>증가</button>
            <button onClick={()=>dispatch({type:'DECREMENT'}) }>감소</button>
            <button onClick={()=>dispatch({type:'RESET'}) } >초기화</button>
            </p>
        </div>
    );
};

export default Test14;