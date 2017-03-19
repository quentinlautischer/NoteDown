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
            <WebView
                source={require('../shared/models/flashcard.html')}
                style={styles.view}
            />
        )
    }
}

var styles = StyleSheet.create({
    view: {
        flex:1,
        marginTop:40,
        // flexDirection:'column',
        // alignItems:'center',
        // justifyContent:'center',
        // marginLeft:20,
        // marginRight:20,
        // marginBottom:20,
        // borderRadius:5
    }
});
