import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const logger = store => next => action => {
  console.log('prev state', store.getState())
  console.log('dispatch', action)
  next(action)
  console.log('next state', store.getState())
}

const logger2 = store => next => action => {
  console.log('prev state2', store.getState())
  console.log('dispatch2', action)
  next(action)
  console.log('next state2', store.getState())
}

const myThunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch)
  }
  return next(action)
}

const reducer = combineReducers(reducers)
const store = createStore(reducer, applyMiddleware(myThunk))

store.subscribe(() => {
  let state = store.getState()
  localStorage.setItem('store', JSON.stringify(state))
})

export default store