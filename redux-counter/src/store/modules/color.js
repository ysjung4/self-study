
//액션생성
const RED = 'color/RED'
const PINK  = 'color/PINK'
const BLUE = 'color/BLUE'

//액션함수
export const red = () => ({type:RED})
export const pink = () => ({type:PINK})
export const blue = () => ({type:BLUE})

//리듀서 순수 함수
const initalState = { color:'orange'}
const reducer = (state=initalState,action)  => {
    switch(action.type){
        case RED:
            return {
                ...state,
                color:red
            }
            case PINK:
            return{
                ...state,
                color:pink
            }
            case BLUE:
                return{
                    ...state,
                    color:blue
                }
        default:
            return state
    }
}

export default reducer