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
                <Text>{this.props.text}</Text>
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
        backgroundColor: colors.LIGHT,
        borderRadius: 4,
        width: 220,
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
