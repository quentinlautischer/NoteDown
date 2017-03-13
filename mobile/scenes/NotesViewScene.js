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

import NotesView from '../components/NotesView.js';

var PAGE_NAV_REF = 'page_nav';

export default class NotesViewScene extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        };
    }

    // external navigation (to completely different scenes)
    navigate() {
        this.props.navigator.push({
            title: arguments[0],
            content: this.props.content
        })
    }

    onSwipeLeft(gestureState) {
        // go to next page
        if (this.state.index < this.props.content.pages.length - 1) {
            this.refs[PAGE_NAV_REF].push({
                content: this.props.content.pages[this.state.index + 1].content
            });
            this.setState({index: this.state.index + 1});
        }
    }

    onSwipeRight(gestureState) {
        // go to previous page
        if (this.state.index > 0) {
            this.refs[PAGE_NAV_REF].pop();
            this.setState({index: this.state.index - 1});
        }
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        const routes = this.props.content.pages;

        return (
            <GestureRecognizer
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={styles.view}>

                <Navigator // this is where the WebView that shows the rendered notes lives
                    ref={PAGE_NAV_REF}
                    initialRoute={routes[0]}
                    renderScene={(route, navigator) => {
                        return <NotesView navigator={navigator} content={route.content} />
                    }}
                />

                <ActionButton // floating action button (to edit notes)
                    buttonColor='#0aaf82'
                    onPress = {
                        this.navigate.bind(this, "Edit Notes")
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
