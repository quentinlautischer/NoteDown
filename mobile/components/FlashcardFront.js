/*
Relevant requirements:
- FU-20: Mobile: Flashcards: View
*/

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import colors from '../app/constants';

class FlashcardFront extends Component {

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return(
            <View style={styles.view}>
                <View style={styles.card}>
                    <Text style={styles.text}>{this.props.content}</Text>
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
    icon: {
        position: 'absolute',
        top: 2,
        left: 2,
        height: 30,
        width: 30
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

FlashcardFront.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default connect()(FlashcardFront);
