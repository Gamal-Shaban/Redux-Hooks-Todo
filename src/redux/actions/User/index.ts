import { Alert } from 'react-native'
import { post_request } from '../../../Services/Api'
import {
  LOGIN,

  LOGOUT_SUCCESS, SIGNUP, START_LOADING,
  STOP_LOADING
} from '../actionTypes'

export const Signup = (username: string, password: string, navigation: any) => {
  return async dispatch => {
    dispatch({ type: START_LOADING })

    //   request go here--->
    const response = await post_request({
      target: 'register',
      body: { username, password },
    })
    console.log('response>>>', response)
    if (response) {
      dispatch({ type: SIGNUP, payload: response })
      Alert.alert(
        '',
        response.message === 'user create successfully' ? 'user create successfully' : 'A user with that username already exists',
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
        { cancelable: false },
      )
    } else {
      //   toast('errorInConnection')
    }

    // dispatch({ type: FETCH_NOTES, payload:[] });
    dispatch({ type: STOP_LOADING })
  }
}

export const Login = (username: string, password: string, navigate: any) => {
  return async dispatch => {
    dispatch({ type: START_LOADING })
    const response = await post_request({
      target: 'token/',
      body: { username, password },
    })
    dispatch({ type: STOP_LOADING })
    if(response.refresh){
    dispatch({ type: LOGIN, payload: response })
    navigate('AppNavigator')
    }else {
      Alert.alert(
        '',
        response.detail,
        [
          {
            text: 'OK',
            onPress: () => {
              
            },
          },
        ],
        { cancelable: false },
      )
    }
  }
}


export const logout = navigation => {
  return dispatch => {
    dispatch({ type: START_LOADING });
    dispatch({ type: LOGOUT_SUCCESS});
    navigation.navigate('AuthLoading')
    dispatch({ type: STOP_LOADING })


  };
};