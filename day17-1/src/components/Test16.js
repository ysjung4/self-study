import React, { useEffect, useReducer } from 'react';
import axios from 'axios'

// const initalState = {
//     loading:true,
//     data:{},
//     error:''
// }
// const reducer = (state,action) => {
   
//         switch (action.type) {
//             case 'SUCCESS':
//                 return {
//                     loading:false,
//                    data: action.payload,
//                      error:''
//                 }
//                 case 'ERROR':
//                     return {
//                     loading:true,
//                    data:{},
//                      error:'데이터를 찾을수 없습ㄴ디ㅏ'
//                     }
//                     default :
//                     return state
//         }
// }

// const Test16 = () => {
//     const [state, dispatch] = useReducer(reducer,initalState)
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts/5')
//         .then(res=> {dispatch({type:'SUCCESS'})
//     }).catch( error =>{
//         dispatch({type:'ERROR'})
         

//         })
//     },[])
//     return (
//         <div>
//             <h2>{state.loading ? '로딩중...': state.data}</h2>
//             <p>
//                 {
//                     state.loading?'로딩중': state.data
//                 }
//             </p>
//         </div>
//     );
// };

const initalState = {
    loading: true ,
    data : {} , 
    error :''
}
const reducer = (state , action) => {
    switch( action.type ){
        case 'SUCCESS':
            return {
                loading: false ,
                data : action.payload , 
                error :''
            }
        case 'ERROR':
            return {
                loading: true ,
                data : {} , 
                error :'데이터를 불러올수 없습니다.'
            }
        default :
            return state        
    }
}
const Test16 = () => {
    const [state , dispatch ] = useReducer ( reducer , initalState )
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/5')
             .then(res => {
                dispatch({type:'SUCCESS' , payload : res.data })
             }).catch( error => {
                 dispatch({type:'ERROR'})
             })
    },[])

    return (
        <div>
            <h2>
                {state.loading ? '로딩중...' : state.data.title }
            </h2>
            <p>
                {
                    state.error ? state.error : null 
                }
            </p>
        </div>
    );
};
export default Test16;