
//액션명 = '파일명/액션생성'
const RED ='color/RED'
const GREEN ='color/GREEN'
const BLUE ='color/BLUE'
const PINK ='color/PINK'
const YELLOW ='color/YELLOW'
//액션함수 내보내기
export const red = () => ({type:RED})
export const green = () => ({type:GREEN})
export const blue = () => ({type:BLUE})
export const pink = () => ({type:PINK})
export const yellow = () => ({type:YELLOW})
//리듀서 => 순서함수

const initalState = {color:'orange'}
const reducer = (state = initalState,action) => {
    switch(action.type){
        case RED:
            return {
                ...state,
                color:'red'
            }
            case GREEN:
                return {
                    ...state,
                    color:'green'
                }
                case BLUE:
                    return {
                        ...state,
                        color:'blue'
                    }
                    case PINK:
                        return {
                            ...state,
                            color:'pink'
                        }
                        case YELLOW:
                            return {
                                ...state,
                                color:'yellow'
                            }
                                    
        default:
            return state
    }
}

export default reducer