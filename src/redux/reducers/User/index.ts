import { LOGOUT_SUCCESS, LOGIN } from '../../actions/actionTypes'

// set initial state
const INITIALSTATE = {
  token: '',
}

export default (state = INITIALSTATE, action) => {
  console.log('action>>>>>', action)
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload.access }
    case LOGOUT_SUCCESS:
      return { ...state, token: null }
    default:
      return state
  }
}
