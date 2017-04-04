import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    StyleSheet,
    WebView,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

var Orientation = require('react-native-orientation');
import colors from '../app/constants';
import FlashcardFront from '../components/FlashcardFront';
import FlashcardBack from '../components/FlashcardBack';

var FC_NAV_REF = 'fc_nav';

class FlashcardViewScene extends Component {

    componentDidMount() {
        Orientation.lockToLandscape(); //this will lock the view to Landscape
        this.context.store.dispatch({type: 'SET_FLASHCARD_INDEX', currentIndex: 0});
        console.log('FCs: ' + JSON.stringify(this.context.store.getState().flashcards));
    }

    componentWillUnmount() {
        Orientation.unlockAllOrientations();
        this.context.store.dispatch({type: 'SET_FLASHCARD_INDEX', currentIndex: 0});
    }

    onSwipeLeft(gestureState) {
        var state = this.context.store.getState();
        // go to next page
        if (state.flashcards.currentIndex < state.flashcards.flashcardFolders.folders[state.state.folderIndex].flashcards.length - 1) {
            this.cardTransition();
        }
    }

    onSwipeRight(gestureState) {
        var state = this.context.store.getState().flashcards;

        // go to previous page
        if (state.currentIndex > 0) {
            this.cardTransition(this.goToPrevious.bind(this));
        }
    }

    /*
     * Determines and intitiates appropriate transtions following a swipe left/right
     */
    cardTransition(cb=this.goToNext.bind(this)) {
        if (this.context.store.getState().state.mode !== 'flashcardFront') { // viewing solution or hints
            this.flipToFrontAndTransition(cb);
        } else {
            cb();
        }
    }

    /*
     * Flips back to front then performs the callback
     */
    flipToFrontAndTransition(cb) {
        var state = this.context.store.getState();
        var flashcards = state.flashcards.flashcardFolders.folders[state.state.folderIndex].flashcards;

        this.context.store.dispatch({type: 'FLASHCARD_FRONT_MODE'});
        this.refs[FC_NAV_REF].replaceAtIndex(
            { index: 0, content: flashcards[state.flashcards.currentIndex]},
            -1,
            cb
        );
    }

    goToNext() {
        var state = this.context.store.getState();
        var flashcards = state.flashcards.flashcardFolders.folders[state.state.folderIndex].flashcards;
        this.refs[FC_NAV_REF].push({
            index: 0,
            content: flashcards[state.flashcards.currentIndex + 1].front
        });
        this.context.store.dispatch({type: 'SET_FLASHCARD_INDEX', currentIndex: state.flashcards.currentIndex + 1});
    }

    goToPrevious() {
        var state = this.context.store.getState().flashcards;

        this.refs[FC_NAV_REF].pop();
        this.context.store.dispatch({type: 'SET_FLASHCARD_INDEX', currentIndex: state.currentIndex - 1});
    }

    onSwipeUp(gestureState) {
        if (this.context.store.getState().state.mode === 'flashcardFront') {
            this.context.store.dispatch({type: 'FLASHCARD_BACK_MODE'});
            this.refs[FC_NAV_REF].push({
                index: 2
            });
        }
        else if (this.context.store.getState().state.mode === 'flashcardHints') {
            this.flipToFront();
        }
    }

    onSwipeDown(gestureState) {
        if (this.context.store.getState().state.mode === 'flashcardBack') {
            this.flipToFront();
        }
        else if (this.context.store.getState().state.mode === 'flashcardFront') {
            this.context.store.dispatch({type: 'FLASHCARD_HINTS_MODE'});
            this.refs[FC_NAV_REF].push({
                index: 1
            });
        }
    }

    flipToFront() {
        this.context.store.dispatch({type: 'FLASHCARD_FRONT_MODE'});
        this.refs[FC_NAV_REF].pop();
    }

    onRank() {
        Alert.alert(
            'Rank',
            'Select difficulty level',
            [
                {text: 'Easy', onPress: () => console.log('1')},
                {text: 'Medium', onPress: () => console.log('2')},
                {text: 'Hard', onPress: () => console.log('3')},
            ],
            { cancelable: false }
        )
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return (
            <GestureRecognizer
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                onSwipeUp={(state) => this.onSwipeUp(state)}
                onSwipeDown={(state) => this.onSwipeDown(state)}
                config={config}
                style={styles.container}>

                <Navigator // this is where the WebView that shows the rendered notes lives
                    ref={FC_NAV_REF}
                    initialRoute={{index: 0}}
                    renderScene={(route, navigator) => {
                        if (route.index === 0) { // front
                            return <FlashcardFront
                                navigator={navigator}
                                content={this.context.store.getState().flashcards.flashcardFolders
                                    .folders[this.context.store.getState().state.folderIndex]
                                    .flashcards[this.context.store.getState().flashcards.currentIndex].front} />
                        } else if (route.index === 1) { // hints
                            return <FlashcardBack
                                navigator={navigator}
                                content={this.context.store.getState().flashcards.flashcardFolders
                                    .folders[this.context.store.getState().state.folderIndex]
                                    .flashcards[this.context.store.getState().flashcards.currentIndex].hints} />
                        } else if (route.index === 2) { // back
                            return <FlashcardBack
                                navigator={navigator}
                                content={this.context.store.getState().flashcards.flashcardFolders
                                    .folders[this.context.store.getState().state.folderIndex]
                                    .flashcards[this.context.store.getState().flashcards.currentIndex].back}
                                onRank={this.onRank.bind(this)} />
                        }
                    }}
                    configureScene={(route, routeStack) => {
                        if (route.index === 0) { // front
                            return Navigator.SceneConfigs.PushFromRight
                        } else if (route.index == 1) { // hints
                            return Navigator.SceneConfigs.VerticalDownSwipeJump
                        } else { // back
                            return Navigator.SceneConfigs.VerticalUpSwipeJump
                        }
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
