import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    WebView,
    StyleSheet
} from 'react-native';

import parse from '../shared/parser.js';

export default class NotesView extends Component {
    render() {
        return (
            <WebView
                source={{html: parse.parse(this.props.content)}}
            />
        )
    }
}
