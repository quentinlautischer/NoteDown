import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';

export default class LoginScene extends Component {
    navigate(){
        this.props.navigator.push({
            title: 'Main Menu'
        })
    }

    render() {
        return (
            <View>
                <Text>This is the login scene.</Text>
                <TouchableHighlight onPress = {this.navigate.bind(this)}>
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
