
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Navigate from './scenes/Navigate';

export default class Main extends Component {
    render() {
        return <Navigate />
    }
}

AppRegistry.registerComponent('mobile', () => Main);
