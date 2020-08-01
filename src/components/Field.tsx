import React, { Component } from 'react';

export class Field extends Component {
    name: string;
    id: string;
    error: string;

    markdownOutput: () => {};

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            id: props.id,
            error: '',
            markdownOutput: props.markdownOutput
        };
    }
}

export default Field;