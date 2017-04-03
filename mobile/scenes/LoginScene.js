import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableHighlight,
    StyleSheet,
    Alert,
    Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import SocketIOClient from 'socket.io-client';
import MenuButton from '../components/MenuButton';
import LoginInput from '../components/LoginInput';
import MenuScene from './MenuScene'; // for navigation
import SettingsScene from './SettingsScene';

// const HOST = '127.0.0.1';
var HOST = "localhost"; // allows me to test on android
const PORT = '3000';

const USERNAME_REF="un";
const PASSWORD_REF="pw";

const LOGIN_ERR = "Could not login.  Please verify your username and password";

class LoginScene extends Component {
    constructor(props) {
        super(props);

        // Creating the socket-client instance will automatically connect to the server.
        this.socket = SocketIOClient('http://' + HOST + ':' + PORT);

        this.clearText = this.clearText.bind(this);
    }

    componentDidMount() {
        this.socket.on('data', (data) => {
            // check the user exists in the database
            if (data.event === 'request-login-response') {
                if (data.data.result) {
                    this.context.store.dispatch({type: 'SET_USER', userid: data.data.userid});
                    this.requestPullData();
                } else {
                    Alert.alert('Error', LOGIN_ERR)
                }

            // recieve the user's data (to populate their folders)
            } else if (data.event === 'request-pull-data-response') {
                console.log("Mobile client pulled data: ", data);
                this.context.store.dispatch({type: 'SET_NOTES', notes: data.data.notes});
                if (this.context.store.getState().state.mode === 'login') {
                    this._navigate();
                }
            }
        });
    }

    clearText() {
        this.refs['un'].clear(0);
    }

    requestPullData() {
        var state = this.context.store.getState();
        const data = {userid: state.state.userid};
        this.socket.emit('request-pull-data', data);
    }

    _navigate() {
        this.context.store.dispatch({type: 'MENU_MODE'});
        this.props.navigator.push({
            title: 'MenuScene',
            component: MenuScene,
            passProps: {
                socket: this.socket
            },
            onPress: this.onPress.bind(this),
            rightIconName: 'logout',
            onBack: this.onBack.bind(this),
            backIconName: 'settings'
        });
        Keyboard.dismiss();
    }

    onPress() {
        this.context.store.dispatch({type: 'LOGIN_MODE'});

        this.context.store.dispatch({type: 'SET_USER', userid: null});
        this.context.store.dispatch({type: 'SET_NOTES', notes: null});
        this.context.store.dispatch({type: 'SET_FLASHCARD_FOLDERS', notes: null});

        this.refs[USERNAME_REF].clearText();
        this.refs[PASSWORD_REF].clearText();

        this.props.navigator.pop();
    }

    onBack() {
        this.context.store.dispatch({type: 'SETTINGS_MODE'});

        this.props.navigator.push({component: SettingsScene});
    }

    attemptLogin() {
        this.socket.emit('request-login', {
            username: this.refs[USERNAME_REF].state.inputText,
            password: this.refs[PASSWORD_REF].state.inputText,
            platform: 'mobile'
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

const styles = StyleSheet.create({
    view: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }
});

LoginScene.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default connect()(LoginScene);
