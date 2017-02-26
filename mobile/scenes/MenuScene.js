import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';

export default class MenuScene extends Component {
    navigate(){
        this.props.navigator.push({
            title: arguments[0],
        })
    }

    render() {
        return (
            <View>
                <Text>This is the menu scene.</Text>
                <TouchableHighlight onPress = {
                    this.navigate.bind(this, 'Folders')
                }>
                    <Text>Folders</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress = {
                    this.navigate.bind(this, 'Flashcards Menu')
                }>
                    <Text>Flashcards</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
