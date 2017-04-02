import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import MenuButton from '../components/MenuButton';
import colors from '../app/constants';
import shared from '../shared/parser.js';

// navigate
import FoldersScene from './FoldersScene';
import FlashcardsMenuScene from './FlashcardsMenuScene';
import CameraScene from './CameraScene';

class MenuScene extends Component {

    _navigate(scene, name) {
        this.props.navigator.push({
            title: name,
            component: scene,
            passProps: {
                flashcardFolders: this.context.store.getState().flashcards.flashcardFolders.folders,
                socket: this.props.socket
            }
        });
    }

    componentDidMount() {
        var state = this.context.store.getState();
        var folders = shared.extractFlashcardsInFolders(state.notes.folders);
        this.context.store.dispatch({type: 'SET_FLASHCARD_FOLDERS', flashcardFolders: folders});
    }

    render() {
        return (
            <View style={styles.view}>
                <TouchableHighlight onPress = { () => {
                    this.context.store.dispatch({type: 'FOLDER_MODE'});
                    this._navigate(FoldersScene, 'FoldersScene')
                }}>
                    <MenuButton text='Folders' />
                </TouchableHighlight>
                <TouchableHighlight onPress = { () => {
                    this.context.store.dispatch({type: 'FLASHCARD_MODE'});
                    this._navigate(FlashcardsMenuScene, 'FlashcardsMenuScene')
                }}>
                    <MenuButton text='Flashcards' />
                </TouchableHighlight>
                <TouchableHighlight onPress = { () => {
                    this.context.store.dispatch({type: 'CAMERA_MODE'});
                    this._navigate(CameraScene, 'CameraScene')
                }}>
                    <MenuButton text='Camera Mode' />
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    view: {
        backgroundColor: colors.PRIMARY1,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

MenuScene.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default connect()(MenuScene);
