import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';
import colors from '../app/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class FlashcardFront extends Component {

    onSwipeUp(gestureState) {
        this.props.navigator.push({
            index: 2
        });
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return(
            <GestureRecognizer
                style={styles.view}
                onSwipeUp={(state) => this.onSwipeUp(state)}
                config={config}>

                <TouchableHighlight
                    style={styles.icon}
                    onPress={() => this.props.navigator.push({
                        index: 1
                    })}>
                    <Icon name='lightbulb-outline' size={30} color={colors.SECONDARY2} />
                </TouchableHighlight>
                <View style={styles.card}>
                    <Text style={styles.text}>{this.props.content}</Text>
                </View>
            </GestureRecognizer>

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
