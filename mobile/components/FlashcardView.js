import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import colors from '../app/constants';

export default class FlashcardView extends Component {
    render() {
        return(
            <View>
                <Text>{this.props.content[0].front}</Text>
                <Text>{this.props.content[0].back.toString()}</Text>
                <Text>{this.props.content[0].hints.toString()}</Text>
            </View>
        )
    }
}
