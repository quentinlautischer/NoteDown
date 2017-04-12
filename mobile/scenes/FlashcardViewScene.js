/*
Relevant requirements:
- FU-23: Cloud Sync: Push
- FU-20: Mobile: Flashcards: View
- FU-21: Mobile: Flashcards: Rank
*/

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
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: this.props.currentIndex
        }

        this.storeDidUpdate = this.storeDidUpdate.bind(this);
    }

    storeDidUpdate() {
        this.setState({
            currentIndex: this.context.store.getState().flashcards.currentIndex
        });
    }

    componentDidMount() {
        this.unsubscribe = this.context.store.subscribe( this.storeDidUpdate );
        Orientation.lockToLandscape(); //this will lock the view to Landscape
    }

    componentWillUnmount() {
        Orientation.unlockAllOrientations();
        this.context.store.dispatch({type: 'SET_FLASHCARD_INDEX', currentIndex: 0});
        this.unsubscribe();
    }

    onSwipeLeft(gestureState) {
        this.cardTransition();
    }

    onSwipeRight(gestureState) {
        this.cardTransition(this.goToPrevious.bind(this));
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
        var state = this.context.store.getState().flashcards;
        var flashcards = state.flashcards[state.flashcardFolderIndex].flashcards;

        this.context.store.dispatch({type: 'FLASHCARD_FRONT_MODE'});
        this.refs[FC_NAV_REF].replaceAtIndex(
            { index: 0 },
            -1,
            cb
        );
    }

    goToNext() {
        var state = this.context.store.getState().flashcards;
        this.refs[FC_NAV_REF].push({ index: 0 });
        this.context.store.dispatch({type: 'NEXT_FLASHCARD'});
    }

    goToPrevious() {
        var state = this.context.store.getState().flashcards;

        this.refs[FC_NAV_REF].pop();
        this.context.store.dispatch({type: 'SET_FLASHCARD_INDEX', currentIndex: state.currentIndex - 1});
    }

    onSwipeUp(gestureState) {
        if (this.context.store.getState().state.mode === 'flashcardFront') {
            this.context.store.dispatch({type: 'FLASHCARD_BACK_MODE'});
            this.refs[FC_NAV_REF].push({ index: 2 });
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
            this.refs[FC_NAV_REF].push({ index: 1 });
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
                {text: 'I know it!', onPress: () => this.storeRank(1)},
                {text: 'Review a bit more', onPress: () => this.storeRank(2)},
                {text: 'Really difficult', onPress: () => this.storeRank(3)},
            ],
            { cancelable: false }
        )
    }

    storeRank(rank) {
        var state = this.context.store.getState().flashcards;
        this.context.store.dispatch({type: "RANK_FLASHCARD", value: rank});
        if (state.currentIndex < state.flashcards[state.flashcardFolderIndex].flashcards.length - 1) {
            this.cardTransition();
        }
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        if (this.state.currentIndex === -1) {
            // out of flashcard to show
            return(
                <View style={styles.emptyMsg}>
                    <Text style={styles.emptyMsgText}>
                        Folder complete!
                    </Text>
                </View>
            )
        } else {
            return(
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
                                    content={this.context.store.getState().flashcards
                                        .flashcards[this.context.store.getState().flashcards.flashcardFolderIndex]
                                        .flashcards[this.context.store.getState().flashcards.currentIndex].front} />
                            } else if (route.index === 1) { // hints
                                return <FlashcardBack
                                    navigator={navigator}
                                    content={this.context.store.getState().flashcards
                                        .flashcards[this.context.store.getState().flashcards.flashcardFolderIndex]
                                        .flashcards[this.context.store.getState().flashcards.currentIndex].hints} />
                            } else if (route.index === 2) { // back
                                return <FlashcardBack
                                    navigator={navigator}
                                    content={this.context.store.getState().flashcards
                                        .flashcards[this.context.store.getState().flashcards.flashcardFolderIndex]
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
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.PRIMARY1,
        marginTop:40
    },
    emptyMsg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyMsgText: {
        color: colors.DARK,
        textAlign: 'center',
        fontSize: 22
    }
});

FlashcardViewScene.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default connect()(FlashcardViewScene);
