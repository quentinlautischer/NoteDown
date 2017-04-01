import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';
import colors from '../app/constants';

export default class FlashcardBack extends Component {

    render() {
        return(
            <View style={styles.view}>
                <View style={styles.card}>
                    <Text style={styles.text}>{this.props.content.toString()}</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.LIGHT,
        margin: 10,
        padding: 10,
        borderRadius: 5
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        color: colors.DARK
    }
});
