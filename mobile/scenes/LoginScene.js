import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    TextInput,
    StyleSheet
} from 'react-native';
import SocketIOClient from 'socket.io-client';


export default class LoginScene extends Component {
    constructor(props) {
        super(props);

        // Creating the socket-client instance will automatically connect to the server.
        this.socket = SocketIOClient('127.0.0.1:3000');

        this.state = {
            usernameText: '',
            passwordText: ''
        };
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
            <View style={styles.view}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Username'
                    autoCorrect={false}
                    onChangeText={(text) => this.setState({usernameText: text})}
                    value={this.state.usernameText}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Password'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({passwordText: text})}
                    value={this.state.passwordText}
                />
                <TouchableHighlight style={styles.loginButton}
                    onPress = {this.navigate.bind(this)}>
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    view: {
        backgroundColor: '#0aaf82',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 220,
        height: 50    
    },
    loginButton: {
        backgroundColor: 'white',
        borderRadius: 4,
        width: 80,
        height:30,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
