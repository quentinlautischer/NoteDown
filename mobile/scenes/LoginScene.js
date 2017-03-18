import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableHighlight,
    StyleSheet,
    Alert
} from 'react-native';
import SocketIOClient from 'socket.io-client';
import MenuButton from '../components/MenuButton';
import LoginInput from '../components/LoginInput';

// const HOST = '127.0.0.1';
var HOST = "localhost"; // allows me to test on android
const PORT = '3000';

const USERNAME_REF="un";
const PASSWORD_REF="pw";

const LOGIN_ERR = "Could not login.  Please verify your username and password";

export default class LoginScene extends Component {
    constructor(props) {
        super(props);

        // Creating the socket-client instance will automatically connect to the server.
        this.socket = SocketIOClient('http://' + HOST + ':' + PORT);
    }

    componentDidMount() {
        this.socket.on('data', (data) => {
            // check the user exists in the database
            if (data.event === 'request-login-response') {
                console.log("mobile client logged in, recieved data: ", data);

                if (data.data.result) {
                    this.socket.emit('request-pull-data', { userid: data.data.userid });
                } else {
                    Alert.alert('Error', LOGIN_ERR)
                }

            // recieve the user's data (to populate their folders)
            } else if (data.event === 'request-pull-data-response') {
                console.log("Mobile client pulled data: ", data);
                this.props.navigator.push({
                    title: 'Main Menu',
                    content: data
                });
            }
        });
    }

    attemptLogin() {
        this.socket.emit('request-login', {
            username: this.refs[USERNAME_REF].state.inputText,
            password: this.refs[PASSWORD_REF].state.inputText,
        });
    }

    render() {
        return (
            <View style={styles.view}>
                <LoginInput
                    ref={USERNAME_REF}
                    placeholder='Username'
                    autoFocus={true}
                    secure={false}
                />
                <LoginInput
                    ref={PASSWORD_REF}
                    placeholder='Password'
                    autoFocus={false}
                    secure={true}
                />
                <TouchableHighlight
                    onPress = {this.attemptLogin.bind(this)}>
                    <MenuButton text='Login' />
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
    }
});
