import actonTypes from './actionTypes'

const defaultState = {
  sidebarList: [],
  rightList: {},
  categoryList: {},
  currentCategoryIndex: 0,
  isFold: true,
  loading: false,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actonTypes.SET_STATE: {
      let newState = JSON.parse(JSON.stringify(state))
      newState[action.key] = action.value
      return newState
    }
    default: 
      return state
  }
}

export default reducer