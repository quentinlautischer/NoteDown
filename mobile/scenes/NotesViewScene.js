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

export default class NotesViewScene extends Component {
    navigate(){
        this.props.navigator.push({
            title: arguments[0],
            content: this.props.content
        })
    }

    onSwipeLeft(gestureState) {
        // this.setState({myText: 'You swiped left!'});
        console.log('You swiped left!');
    }

    onSwipeRight(gestureState) {
        // this.setState({myText: 'You swiped right!'});
        console.log('You swiped right!');
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
                    source={{html: parse.parse(this.props.content.pages[0].content)}}
                />
                <ActionButton
                    buttonColor='#0aaf82'
                    onPress = {
                        this.navigate.bind(this, 'Edit Notes')
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
