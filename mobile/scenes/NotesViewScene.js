import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';

export default class NotesViewScene extends Component {
    navigate(){
        this.props.navigator.push({
            title: arguments[0],
            content: this.props.content
        })
    }

    render() {
        return (
            <View>
                <Text>This is the notes view scene.</Text>
                <Text>Viewing {this.props.content}</Text>
                <TouchableHighlight onPress = {
                    this.navigate.bind(this, 'Edit Notes')
                }>
                    <Text>Edit Notes</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress = {
                    this.navigate.bind(this, 'View Flashcard')
                }>
                    <Text>View Flashcards</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
