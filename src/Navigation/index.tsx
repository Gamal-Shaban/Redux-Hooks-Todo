import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Signup from '../Screens/Signup/SignupScreen'


const AuthNavigator = createStackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerShown: false
    }
  },
})

export default createAppContainer(AuthNavigator)
