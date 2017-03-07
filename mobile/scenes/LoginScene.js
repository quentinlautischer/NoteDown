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

const HOST = '127.0.0.1';
const PORT = '3000';

export default class LoginScene extends Component {
    constructor(props) {
        super(props);

        // Creating the socket-client instance will automatically connect to the server.
        this.socket = SocketIOClient('http://' + HOST + ':' + PORT);

        this.state = {
            usernameText: '',
            passwordText: ''
        };
    }

    componentDidMount() {
        // TODO: socket logic
    }

    attemptLogin() {
        this.socket.emit('request-login', {
            username: this.state.usernameText,
            password: this.state.passwordText
        });
        this.props.navigator.push({
            title: 'Main Menu'
        });
    }

    render() {
        return (
            <View style={styles.view}>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Username'
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({usernameText: text})}
                        value={this.state.usernameText}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                        style={styles.textInput}
                        style={styles.textInput}
                        placeholder='Password'
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({passwordText: text})}
                        value={this.state.passwordText}
                    />
                </View>
                <TouchableHighlight style={styles.loginButton}
                    onPress = {this.attemptLogin.bind(this)}>
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    view: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
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
