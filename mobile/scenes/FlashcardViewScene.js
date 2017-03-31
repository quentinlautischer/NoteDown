import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    StyleSheet,
    WebView
} from 'react-native';
import { connect } from 'react-redux';

var Orientation = require('react-native-orientation');
import makeFlashcard from '../shared/parser.js';
import colors from '../app/constants';
import FlashcardView from '../components/FlashcardView';

class FlashcardViewScene extends Component {
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
        var folderIdx = this.context.store.getState().state.folderIndex;
        return (
            <View style={styles.container}>
                <FlashcardView content={this.props.content.folders[folderIdx].flashcards} />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.PRIMARY1,
        marginTop:40
    },
    view: {
        flex:1,
        backgroundColor: colors.PRIMARY1
    }
});

FlashcardViewScene.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default connect()(FlashcardViewScene);
