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
            <View style={styles.view}>
                <Text>{this.props.content.front}</Text>
                <Text>{this.props.content.back.toString()}</Text>
                <Text>{this.props.content.hints.toString()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.LIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 5
    }
});
