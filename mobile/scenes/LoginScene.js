import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';

var styles = require('../styles.js');

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
                <TouchableHighlight style={styles.menubutton} onPress = {this.navigate.bind(this)}>
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
