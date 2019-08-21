import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const myThunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch)
  } else {
    next(action)
  }
}

const reducer = combineReducers(reducers)
const store = createStore(reducer, applyMiddleware(myThunk))
export default store