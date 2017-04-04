import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableHighlight,
    StyleSheet,
    Alert,
    Keyboard,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import SocketIOClient from 'socket.io-client';
import Toast from 'react-native-root-toast';
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
const CLOUD_PULL_ERR = "An error occured trying to pull your data from the cloud";
const CLOUD_PUSH_ERR = "An error occured trying to push your data to the cloud";
const CLOUD_PULL_SUCC = "Successfully retrieved your data from the cloud";
const CLOUD_PUSH_SUCC = "Successfully pushed your data to the cloud";

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
                if (data.data.result) {
                    this.context.store.dispatch({type: 'SET_NOTES', notes: data.data.notes});
                    if (this.context.store.getState().state.mode === 'login') {
                        this._navigate();
                    }
                    this.updateSavedContent();
                } else {
                    Alert.alert('Error', CLOUD_PULL_ERR);
                }
            } else if (data.event === 'request-push-data-response') {
                if (data.data.result) {
                    this.requestPullData();
                    this.callToast(CLOUD_PUSH_SUCC);
                } else {
                    if (data.data.type == 'push-conflict') {
                        this.handlePushConflict();
                    } else {
                        Alert.alert('Error', CLOUD_PUSH_ERR);
                    }
                }
            }
        });
        this.retrieveSettings();
    }

    callToast(msg) {
        let toast = Toast.show(msg, {
            duration: 1400, // ms
            position: 0, // middle of screen
            shadow: true
        });
    }

    handlePushConflict() {
        Alert.alert(
            'Push conflict',
            'What would you like to do?',
            [
                {text: 'Overwrite pull', onPress: () => this.requestPullData()},
                {text: 'Force push', onPress: () => this.forcePushData()},
            ],
            { cancelable: false }
        )
    }

    updateSavedContent() {
        var folderIdx = this.context.store.getState().state.folderIndex;
        var pageIdx = this.context.store.getState().state.pageIndex;

        this.context.store.dispatch({type: 'UPDATE_PAGE_SAVED_CONTENT',
            content: this.context.store.getState().notes.folders[folderIdx].pages[pageIdx].content,
            folderIndex: this.context.store.getState().state.folderIndex,
            pageIndex: this.context.store.getState().state.pageIndex
        });
    }

    clearText() {
        this.refs['un'].clear(0);
    }

    retrieveSettings() {
        const key = `@${this.context.store.getState().state.userid}:AUTOSAVE_ENABLED`;
        AsyncStorage.getItem(key).then((isAutosave) => {
            this.context.store.dispatch({type: 'AUTOSAVE_ENABLED', value: isAutosave === 'true'});
        }).done();
    }

    requestPullData() {
        var state = this.context.store.getState();
        const data = {userid: state.state.userid};
        this.socket.emit('request-pull-data', data);
    }

    forcePushData() {
        var state = this.context.store.getState();
        const data = {userid: state.state.userid, notes: state.notes, force_push: true};
        this.socket.emit('request-push-data', data);
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
