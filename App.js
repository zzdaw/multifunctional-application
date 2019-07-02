import React, { Component } from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Home from './src/Home';
import Counter from './src/Counter';
import Stopwatch from './src/Stopwatch';
import LocalWeather from './src/LocalWeather';
import reducer from './reducers/index';

//composeWithDevTools pozwala na korzystanie z RN Debugger z Redux
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default class App extends Component {
  render() {
    //console.log(store.getState());
    return (
      <Provider store={store}>
        < AppContainer />
      </Provider>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    HomeScreen: Home,
    CounterScreen: Counter,
    StopwatchScreen: Stopwatch,
    LocalWeatherScreen: LocalWeather
  },
  {
    initialRouteName: 'HomeScreen',
  }
);
//tworzę kontener do którego przekazuję konfigurację ścieżek do routingu
const AppContainer = createAppContainer(AppNavigator);




