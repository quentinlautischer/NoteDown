import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';

export default class NotesEditScene extends Component {
    render() {
        return (
            <View>
                <Text>Edit Notes Here</Text>
                <Text>Editing {this.props.content}</Text>
            </View>
        )
    }
}
