//액션생성 
const CHANGE_COLOR = 'changecolor/CHANGE_COLOR'

//액션함수 내보내기 
export const changeColor = (color) => ({type:CHANGE_COLOR, color})
//reducer 
const initalState = { color : 'skyblue' }
const  reducer = (state=initalState , action ) => {
    switch( action.type ) {
        case CHANGE_COLOR:
            return {
                ...state ,
                color: action.color
            }
        default :
         return  state
    }
}

export default reducer