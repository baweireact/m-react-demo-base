
const defaultState = {
  count: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE': {
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