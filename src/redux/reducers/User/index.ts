import {SIGNUP, LOGIN} from '../../actions/actionTypes'

// set initial state
const INITIALSTATE = {
  token: '',
}

export default (state = INITIALSTATE, action) => {
  console.log('action>>>>>', action)
  switch (action.type) {
    case LOGIN:
      return {...state, token: action.payload.access}

    default:
      return state
  }
}
