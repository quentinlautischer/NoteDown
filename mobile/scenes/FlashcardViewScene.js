import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    StyleSheet
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
            <View style={styles.view}>
                <Text>Viewing flashcard for {this.props.content.name}</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor:'white',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
        borderRadius:5
    }
});
