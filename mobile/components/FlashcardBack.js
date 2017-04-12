/*
Relevant requirements:
- FU-20: Mobile: Flashcards: View
- FU-21: Mobile: Flashcards: Rank
*/

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';
import colors from '../app/constants';
import StepsView from './StepsView';

export default class FlashcardBack extends Component {

    render() {
        return(
            <View style={styles.view}>
                <View style={styles.card}>
                    <StepsView steps={this.props.content} onRank={this.props.onRank} />
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
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});
