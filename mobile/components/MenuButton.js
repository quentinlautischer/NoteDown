import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import colors from '../app/constants';

export default class MenuButton extends Component {
    render() {
        return(
            <View ref='container' style={styles.button}>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }

    // required to use custom Component in TouchableHighlight
    setNativeProps(nativeProps) {
        this.refs.container.setNativeProps(nativeProps);
    }
}

var styles = StyleSheet.create({
    button: {
        backgroundColor: colors.DARK,
        borderRadius: 4,
        width: 220,
        height: 60,
        margin: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.LIGHT,
        fontSize: 18
    }
});
