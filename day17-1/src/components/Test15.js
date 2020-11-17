import React, { useReducer } from 'react';

const initalState =0
const reducer = (state,action) => {
    switch (action.type) {
        case 'IN':
            return state +1
            case 'DE':
                return state -1
                case 'RE':
                    return 0
                    default :
                    return state
    }

}
const Test15 = () => {

    const  [cnt1,dispatch1] = useReducer(reducer,initalState)
    const [cnt2,dispatch2] = useReducer( reducer, 10)
    return (
        <div>
            <h2>{cnt1}</h2>
            <p>
                <button onClick={()=>dispatch1({type:'IN'})}>증가</button>
                <button onClick={()=>dispatch1({type:'DE'})}>감소</button>
                <button onClick={()=>dispatch1({type:'RE'})}>초기화</button>
            </p>
            <h2> {cnt2 } </h2>
            <p>
                <button onClick={()=>dispacth2({type:'IN'})}>증가</button>
                <button onClick={() => dispacth2({type:'DE'})}>감소</button>
                <button onClick={()=>dispacth2({type:'RE'})}>초기화</button>
            </p>
        </div>
    );
};

export default Test15;