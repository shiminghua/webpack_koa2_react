
let React = require('react');
let ReactDom = require('react-dom');
let TodoApp = require('./views/TodoApp.react');

ReactDom.render(
    <TodoApp />,
    document.getElementById('root')
);



