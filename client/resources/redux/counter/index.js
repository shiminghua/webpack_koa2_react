/**
 * counter
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();
console.log(store);
// const store = {counter: 0};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);