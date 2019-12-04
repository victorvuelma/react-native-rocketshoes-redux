/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import colors from './styles/colors';

import Header from './components/Header';
import Routes from './routes';

const App = () => {
  return (
    <>
      <Header />
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes />
    </>
  );
};

export default App;
