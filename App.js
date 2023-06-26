/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SigninScreen from './src/screens/SigninScreen/SigninScreen';

const App = () => {
  return (
    <SafeAreaView style={StyleSheet.root}>
      <SigninScreen></SigninScreen>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
