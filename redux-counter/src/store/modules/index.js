import {combineReducers} from 'redux'
import counter from './counter'
import color from './color'

export default combineReducers({
    counter,
    color
})