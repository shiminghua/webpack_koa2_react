import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        );
    }
}

export default Hello;