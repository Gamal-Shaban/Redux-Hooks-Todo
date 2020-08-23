import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Signup from '../Screens/Signup/SignupScreen'
import Login from '../Screens/Login'


const AuthNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerShown: false
    }
  }
 
})

export default createAppContainer(AuthNavigator)
