import React from 'react';

class Image extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>my react index</h1>
                <img src={ require('../images/1.jpg') } alt='' />
            </div>
        );
    }
}

export default Image;