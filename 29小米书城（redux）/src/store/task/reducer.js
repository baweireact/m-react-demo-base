import actionTypes from './actionTypes'

const currentIndex = JSON.parse(localStorage.getItem('store')) ?
  JSON.parse(localStorage.getItem('store')).task.currentIndex : 0

const defaultState = {
  currentIndex: currentIndex,
  bookNav: [],
  bookList: [],
  myBookList: [],
  detail: {},
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_STATE: {
      let newState = JSON.parse(JSON.stringify(state))
      newState[action.key] = action.value
      return newState
    }
    default:
      return state
  }
}

export default reducer