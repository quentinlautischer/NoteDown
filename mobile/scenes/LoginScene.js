import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';
import SocketIOClient from 'socket.io-client';


export default class LoginScene extends Component {
    constructor(props) {
        super(props);

        // Creating the socket-client instance will automatically connect to the server.
        this.socket = SocketIOClient('127.0.0.1:3000');
    }

    componentDidMount() {
        // TODO: socket logic
    }

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
