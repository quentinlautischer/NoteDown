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
import parse from '../shared/parser.js';

export default class NotesViewScene extends Component {
    navigate(){
        this.props.navigator.push({
            title: arguments[0],
            content: this.props.content
        })
    }

    render() {
        return (
            <View style={styles.view}>
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
            </View>
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
