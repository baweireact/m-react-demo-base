import actionTypes from './actionTypes'

const defaultState = {
  headerText: '猫眼电影',
  movieList: [],
  mostExpected: [],
  comingList: [],
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