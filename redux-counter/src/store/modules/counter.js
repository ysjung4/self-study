//액션생성
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'


//액션함수 내보내기
export const increment = () => ({type:INCREMENT})
export const decrement = () => ({type:DECREMENT})
//dispatch(increment())
//dispatch(decrement())
//dispatch({type:INCREMENT})
//리듀서
const initalState = { cnt : 0}
const reducer = ( state = initalState, action) => {
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                cnt: state+1
            }
            case DECREMENT:
                return {
                    ...state,
                    cnt: state-1
                }
                default:
                    return state
    }
}

export default reducer