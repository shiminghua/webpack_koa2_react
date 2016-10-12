/**
 * index
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import App from './views/App.react';

// function arr() {
//   let args = Array.prototype.slice.call(arguments, 1);
//   console.log(args);
// }
// arr('a', 1, 2, 3, 'b');

// let id = (Date.now() + Math.floor(Math.random() * 999999)).toString(36);
// console.log(id);

ReactDOM.render(
  <App />,
  document.getElementById('todoMVC')
  // document.body
);