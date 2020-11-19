import {combineReducers} from 'redux'
import counter from './modules/counter'
import color from './modules/color'
import changecolor from './modules/changecolor'
import todos from './modules/todos'

export default combineReducers({
    counter,
    color,
    changecolor,
    todos
})