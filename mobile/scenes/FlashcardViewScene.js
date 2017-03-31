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
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

var Orientation = require('react-native-orientation');
import makeFlashcard from '../shared/parser.js';
import colors from '../app/constants';
import FlashcardView from '../components/FlashcardView';

var FC_NAV_REF = 'fc_nav';

class FlashcardViewScene extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flashcardIndex: 0,
            routes: []
        };
    }

    componentDidMount() {
        Orientation.getOrientation((err,orientation)=> {
            console.log("Current Device Orientation: ", orientation);
        });

        Orientation.lockToLandscape(); //this will lock the view to Landscape
    }

    componentWillUnmount() {
        Orientation.unlockAllOrientations();
    }

    setRoutes() {
        var state = this.context.store.getState();
        var folderIndex = state.state.folderIndex;
        // var pageIndex = this.state.pageIndex; // TODO: FC index

        this.setState({ routes: state.notes.folders[folderIndex] });
    }

    onSwipeLeft(gestureState) {
        var state = this.context.store.getState();
        var folderIndex = state.state.folderIndex;
        // var state = this.context.store.getState();
        // var pages = state.notes.folders[state.state.folderIndex].pages;
        var flashcards = this.props.content.folders[folderIndex].flashcards;
        // go to next page
        if (this.state.flashcardIndex < flashcards.length - 1) {
            this.refs[FC_NAV_REF].push({
                content: flashcards[this.state.flashcardIndex + 1]
            });
            // this.context.store.dispatch({type: 'SELECT_PAGE', index: this.state.pageIndex + 1});
            // this.setState({ pageIndex: this.context.store.getState().state.pageIndex });
            this.setState({ flashcardIndex: this.state.flashcardIndex + 1 });
        }
    }

    onSwipeRight(gestureState) {
        // go to previous page
        if (this.state.flashcardIndex > 0) {
            this.refs[FC_NAV_REF].pop();
            // this.context.store.dispatch({type: 'SELECT_PAGE', index: this.state.pageIndex - 1}); // TODO: select FC
            // this.setState({ pageIndex: this.context.store.getState().state.pageIndex });
            this.setState({ flashcardIndex: this.state.flashcardIndex - 1 });
        }
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        var folderIdx = this.context.store.getState().state.folderIndex;
        return (
            <GestureRecognizer
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={styles.container}>

                <Navigator // this is where the WebView that shows the rendered notes lives
                    ref={FC_NAV_REF}
                    initialRoute={this.state.routes[0]}
                    renderScene={(route, navigator) => {
                        return <FlashcardView content={this.props.content.folders[folderIdx].flashcards[this.state.flashcardIndex]} />
                    }}
                />
            </GestureRecognizer>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.PRIMARY1,
        marginTop:40
    }
});

FlashcardViewScene.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default connect()(FlashcardViewScene);
