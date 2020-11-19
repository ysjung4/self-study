const CHANGE_COLOR = 'changecolor/ChANGE_COLOR'


export const changecolor = () => ({type:CHANGE_COLOR})
//reducer
const initalState = {color:'skyblue'}
const reducer = (state = initalState,action) => {
    switch(action.type){
        default:
            return state
    }
}

export default reducer