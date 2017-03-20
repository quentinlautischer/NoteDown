import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    StyleSheet,
    WebView
} from 'react-native';

var Orientation = require('react-native-orientation');
import makeFlashcard from '../shared/models/flashcardTemplate.js';

export default class FlashcardViewScene extends Component {
    componentDidMount() {

        Orientation.getOrientation((err,orientation)=> {
            console.log("Current Device Orientation: ", orientation);
        });

        Orientation.lockToLandscape(); //this will lock the view to Landscape
    }

    componentWillUnmount() {
        Orientation.unlockAllOrientations();
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    style={{
                        backgroundColor: '#0aaf82',
                        height: 200,
                    }}
                    source={{html: makeFlashcard.makeFlashcard("What are some of the features of NoteDown", ["Editing", "Camera Mode", "Flashcards", "Cloud Sync"], ["One is for making/changing notes", "One uses mobile and desktop apps together", "One helps you study", "One is for device sharing"])}}
                    scalesPageToFit={true}
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0aaf82',
        marginTop:40
    },
    view: {
        flex:1,
        backgroundColor: '#0aaf82'
    }
});
