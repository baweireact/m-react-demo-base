import actionTypes from './actionTypes.js'

const taskState = JSON.parse(localStorage.getItem('store')) && JSON.parse(localStorage.getItem('store')).task 
  ? JSON.parse(localStorage.getItem('store')).task 
  : {
    count: 100,
    name: 'xu',
  }
const defaultState = taskState

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_STATE: {
      let newState = JSON.parse(JSON.stringify(state))
      newState[action.key] = action.value
      return newState
    }
    default: {
      return state
    }
  }
}

export default reducer