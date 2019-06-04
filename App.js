import React, { Component } from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './src/Counter';
import reducer from './reducers/index';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}




