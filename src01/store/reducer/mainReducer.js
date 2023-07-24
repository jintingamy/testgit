
import { combineReducers } from 'redux'
import Counter from './counterReducer'
import Show from './showReducer'
const mainReducer = combineReducers({
    Counter:Counter,
    Show
})
export default mainReducer