import {createStore, combineReducers} from 'redux'
import reducers from './reducers.js'

let reducer = combineReducers(reducers)
const store = createStore(reducer)

export default store