import {useNavigation} from '@react-navigation/native'
import {
  START_LOADING,
  STOP_LOADING,
  FETCH_NOTES,
  EDIT_NOTE,
  ADD_NOTE,
  DELETE_NOTE,
  LOGIN,
  SIGNUP,
} from '../actionTypes'
import {
  get_request,
  post_request,
  put_request,
  delete_request,
} from '../../../Services/Api'
import {Alert} from 'react-native'

export const Signup = (username: string, password: string, navigation: any) => {
  return async dispatch => {
    dispatch({type: START_LOADING})

    //   request go here--->
    const response = await post_request({
      target: 'register',
      body: {username, password},
    })
    console.log('response>>>', response)
    if (response) {
      dispatch({type: SIGNUP, payload: response})
      Alert.alert(
        '',
        response.message === 'user create successfully' ? 'user create successfully' : 'A user with that username already exists' ,
        [
          {
            text: 'OK',
            onPress: () => {
                if (response.message === 'user create successfully') {
                    navigation.navigate('Login')
              }
            },
          },
        ],
        {cancelable: false},
      )
    } else {
      //   toast('errorInConnection')
    }

    // dispatch({ type: FETCH_NOTES, payload:[] });
    dispatch({type: STOP_LOADING})
  }
}

export const Login = (username: string, password: string) => {
  return async dispatch => {
    dispatch({type: START_LOADING})
    const response = await post_request({
      target: 'token/',
      body: {username, password},
    })
    console.log('response>>>', response)
    dispatch({type: STOP_LOADING})
    dispatch({type: LOGIN, payload: response})
  }
}
