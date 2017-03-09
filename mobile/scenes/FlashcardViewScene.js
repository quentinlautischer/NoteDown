import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';

export default class FlashcardViewScene extends Component {
    render() {
        return (
            <View>
                <Text>Viewing flashcard for {this.props.content.name}</Text>
            </View>
        )
    }
}
