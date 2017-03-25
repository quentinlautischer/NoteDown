import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import MenuButton from '../components/MenuButton';

export default class MenuScene extends Component {
    navigate(){
        this.props.navigator.push({
            title: arguments[0],
            content: this.props.content,
            socket: this.props.socket
        })
    }

    render() {
        return (
            <View style={styles.view}>
                <TouchableHighlight onPress = {this.navigate.bind(this, 'Folders')}>
                    <MenuButton text='Folders' />
                </TouchableHighlight>
                <TouchableHighlight onPress = {this.navigate.bind(this, 'Flashcards Menu')}>
                    <MenuButton text='Flashcards' />
                </TouchableHighlight>
                <TouchableHighlight onPress = {this.navigate.bind(this, 'Camera')}>
                    <MenuButton text='Camera Mode' />
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    view: {
        backgroundColor: '#0aaf82',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
