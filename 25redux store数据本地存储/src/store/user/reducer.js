const defaultState = {
  username: '',
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USERNAME': {
      let newState = JSON.parse(JSON.stringify(state))
      return newState
    }
    default: {
      return state
    }
  }
}

export default reducer