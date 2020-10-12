/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import RootContainer from './src/RootContainer'
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import Store from './src/redux/store'

const App = () => {
  return (
    <Provider store={Store.store}>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={{ flex: 1, alignSelf: 'stretch' }}>
        <RootContainer />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
