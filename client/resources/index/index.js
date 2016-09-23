import React from 'react';
import ReactDOM from 'react-dom';
import Image from './views/image.react';
import Header from '../common/header/index';
import Footer from '../common/footer/index';

require('./css/index');

ReactDOM.render(
    <div>
        <Header />
        <Image />
        <Footer />
    </div>,
    document.getElementById('content')
);