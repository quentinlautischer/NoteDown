import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

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
        backgroundColor: 'white',
        borderRadius: 4,
        width: 200,
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
