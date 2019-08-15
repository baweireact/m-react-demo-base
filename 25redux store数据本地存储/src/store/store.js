import {createStore, combineReducers} from 'redux'
import reducers from './reducers.js'

const reducer = combineReducers(reducers)
const store = createStore(reducer)

store.subscribe(() => {
  let state = store.getState()
  localStorage.setItem('store', JSON.stringify(state))
})

export default store