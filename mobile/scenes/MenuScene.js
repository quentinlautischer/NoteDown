import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import MenuButton from '../components/MenuButton';

// navigate
import FoldersScene from './FoldersScene';
import FlashcardsMenuScene from './FlashcardsMenuScene';
import CameraScene from './CameraScene';

export default class MenuScene extends Component {

    _navigate(scene, name) {
        this.props.navigator.push({
            title: name,
            component: scene,
            passProps: this.props
        });
    }

    render() {
        return (
            <View style={styles.view}>
                <TouchableHighlight onPress = { () => this._navigate(FoldersScene, 'FoldersScene') }>
                    <MenuButton text='Folders' />
                </TouchableHighlight>
                <TouchableHighlight onPress = { () => this._navigate(FlashcardsMenuScene, 'FlashcardsMenuScene') }>
                    <MenuButton text='Flashcards' />
                </TouchableHighlight>
                <TouchableHighlight onPress = { () => this._navigate(CameraScene, 'CameraScene') }>
                    <MenuButton text='Camera Mode' />
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
    }
});
