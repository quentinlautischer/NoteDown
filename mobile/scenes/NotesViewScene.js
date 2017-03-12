import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    WebView,
    StyleSheet
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import parse from '../shared/parser.js';

var WEBVIEW_REF = 'webview';

export default class NotesViewScene extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        };
    }

    navigate() {
        this.props.navigator.push({
            title: arguments[0],
            content: this.props.content
        })
    }

    onSwipeLeft(gestureState) {
        // go to next page
        if (this.state.index < this.props.content.pages.length - 1) {
            this.setState({index: this.state.index + 1});
            this.refs[WEBVIEW_REF].reload();
        }
    }

    onSwipeRight(gestureState) {
        // go to previous page
        if (this.state.index > 0) {
            this.setState({index: this.state.index - 1});
            this.refs[WEBVIEW_REF].reload();
        }
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return (
            <GestureRecognizer
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={styles.view}>
                <WebView
                ref={WEBVIEW_REF}
                    source={{html: parse.parse(this.props.content.pages[this.state.index].content)}}
                />
                <ActionButton
                    buttonColor='#0aaf82'
                    onPress = {
                        this.navigate.bind(this)
                    }
                    icon={<Icon name="md-create" style={styles.actionButtonIcon} />}
                />
            </GestureRecognizer>
        )
    }
}

var styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
});
