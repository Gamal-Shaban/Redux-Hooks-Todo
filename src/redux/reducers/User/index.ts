import {LOGOUT_SUCCESS, LOGIN} from '../../actions/actionTypes'
import AsyncStorage from '@react-native-community/async-storage'

// set initial state
const INITIALSTATE = {
  token: '',
}

export default (state = INITIALSTATE, action) => {
  console.log('action>>>>>', action)
  
  switch (action.type) {
    case LOGIN:
      AsyncStorage.setItem('token', action.payload.access)
      return {...state, token: action.payload.access}
    case LOGOUT_SUCCESS:
      AsyncStorage.removeItem('token')
      return {...state, token: null}
    default:
      return state
  }
}
