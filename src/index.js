import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import 'intl';
import './config/ReactotronConfig';

import store from './store';
import colors from './styles/colors';

import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes />
    </Provider>
  );
};

export default App;
