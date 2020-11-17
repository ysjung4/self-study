import React from 'react';
import { connect ,Provider  } from 'react-redux'
import { createStore } from 'redux';

// const Counter = () => {
//     return (
//         <div>
//             <h2>숫자 증가 감소하기</h2>
//             <h1>숫자:xx</h1>
//             <button>증가</button>
//             <button>감소</button>
//         </div>
//     );
// }
// //기본 디자인과 리듀서 합쳐서 화면에 보이는 UI
// const mapStateToProps = () => {
//     return {

//     }
// }

// const Container = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Counter)


// //순수함수 액션의 경우의 수 자바스크립트 작성
// const initalState = {count:0}
// const reducer = ( state = initalState,action) => {

//     switch(action.type){
//         case 'INCREMENT':
//             return{
//                 ...state,
//                 count: state.count +1
//             }
//             case 'DECREMENT':
//             return{
//                 ...state,
//                 count: state.count +1
//             }
//     }
// }
// const Test17 = () => {
//     const store = createStore(reducer)
//     return (
//         <div>
//             <Provider store={store}></Provider>
//             <Container/>
//         </div>
//     );
// };

const Counter = ({cnt , increment , decrement}) => {
    return (
        <div>
            <h2>숫자 증가 감소하기</h2>
            <h1> 숫자 : {cnt} </h1>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감가</button>
        </div>
    );
}

//기본디자인과 리듀서 합쳐서 화면에 보이는 UI 
//읽기
const mapStateToProps = (state) => {
    return {
        cnt : state.count
    }
}
//쓰기
const mapDispatchToProps = (dispatch) => {
    return {
        increment : () => dispatch({type:'INCREMENT'}) ,
        decrement : () => dispatch({type:'DECREMENT'}) 
    }
}

const Container = connect(
    mapStateToProps ,
    mapDispatchToProps
)(Counter)



//순수함수 액션의경우의 수 자바스크립트 작성 
const initalState =  { count : 0 }
const reducer = (state = initalState , action ) => {
    switch( action.type ){
        case 'INCREMENT' :
            return {
                ...state ,
                count : state.count  + 1 
            }
        case 'DECREMENT':
            return {
                ...state ,
                count : state.count - 1
            }  
        default:
            return state       
    }
}

const Test17 = () => {
    const store = createStore(reducer)
    return (
        <div>
            <Provider store={store} >
                <Container />
            </Provider>
        </div>
    );
};

export default Test17;