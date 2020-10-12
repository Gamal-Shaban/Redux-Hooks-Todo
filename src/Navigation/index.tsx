import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Signup from '../Screens/Signup/SignupScreen'
import Login from '../Screens/Login'
import Home from '../Screens/Home'
import AuthLoadingScreen from '../Screens/AuthLoadingScreen'


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
const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  }

})

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    AuthNavigator,
    AppNavigator,
    
  },
    {
      initialRouteName: 'AuthLoading',
    }
  )
)
