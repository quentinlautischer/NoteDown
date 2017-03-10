import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';

var Orientation = require('react-native-orientation');

export default class FlashcardViewScene extends Component {
    componentDidMount() {

        Orientation.getOrientation((err,orientation)=> {
            console.log("Current Device Orientation: ", orientation);
        });

        // Orientation.lockToPortrait(); //this will lock the view to Portrait
        Orientation.lockToLandscape(); //this will lock the view to Landscape
        //Orientation.unlockAllOrientations(); //this will unlock the view to all Orientations


    }

    componentWillUnmount() {
        Orientation.lockToPortrait();
    }

    render() {
        return (
            <View>
                <Text>Viewing flashcard for {this.props.content.name}</Text>
            </View>
        )
    }
}
