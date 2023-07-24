import { createStore } from "redux";
import reducer from '../store/reducer/mainReducer'
let store = createStore(reducer)

export default store