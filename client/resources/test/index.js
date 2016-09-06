import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './views/hello.react';

require('./css/test');
require('./css/hello');

ReactDOM.render(
    <Hello name='minghua' />, document.getElementById('content')
);