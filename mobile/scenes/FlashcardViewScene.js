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
            flashcardIndex: 0
        };
    }

    componentDidMount() {
        Orientation.lockToLandscape(); //this will lock the view to Landscape
        console.log('FCs: ' + JSON.stringify(this.context.store.getState().flashcards));
    }

    componentWillUnmount() {
        Orientation.unlockAllOrientations();
    }

    onSwipeLeft(gestureState) {
        var state = this.context.store.getState();
        var folderIndex = state.state.folderIndex;
        var flashcards = state.flashcards.flashcardFolders.folders[folderIndex].flashcards;

        // go to next page
        if (this.state.flashcardIndex < flashcards.length - 1) {
            if (state.state.mode !== 'flashcardFront') { // viewing solution or hints
                this.context.store.dispatch({type: 'FLASHCARD_FRONT_MODE'});
                this.refs[FC_NAV_REF].replaceAtIndex(
                    { index: 0, content: flashcards[this.state.flashcardIndex].front},
                    -1,
                    this.next.bind(this)
                );
            } else {
                this.refs[FC_NAV_REF].push({
                    index: 0,
                    content: flashcards[this.state.flashcardIndex + 1].front
                });
                this.setState({ flashcardIndex: this.state.flashcardIndex + 1 });
            }
        }
    }

    next() {
        var state = this.context.store.getState();
        var folderIndex = state.state.folderIndex;
        var flashcards = state.flashcards.flashcardFolders.folders[folderIndex].flashcards;
        this.refs[FC_NAV_REF].push({
            index: 0,
            content: flashcards[this.state.flashcardIndex + 1].front
        });
        this.setState({ flashcardIndex: this.state.flashcardIndex + 1 });
    }

    onSwipeRight(gestureState) {
        var state = this.context.store.getState();
        var folderIndex = state.state.folderIndex;
        var flashcards = state.flashcards.flashcardFolders.folders[folderIndex].flashcards;

        // go to previous page
        if (this.state.flashcardIndex > 0) {
            if (state.state.mode !== 'flashcardFront') { // viewing solution or hints
                this.context.store.dispatch({type: 'FLASHCARD_FRONT_MODE'});
                this.refs[FC_NAV_REF].replaceAtIndex(
                    { index: 0, content: flashcards[this.state.flashcardIndex].front},
                    -1,
                    this.previous.bind(this)
                );
            } else {
                this.refs[FC_NAV_REF].pop();
                this.setState({ flashcardIndex: this.state.flashcardIndex - 1 });
            }
        }
    }

    previous() {
        var state = this.context.store.getState();
        var folderIndex = state.state.folderIndex;
        var flashcards = state.flashcards.flashcardFolders.folders[folderIndex].flashcards;
        this.refs[FC_NAV_REF].pop();
        this.setState({ flashcardIndex: this.state.flashcardIndex - 1 });
    }

    onSwipeUp(gestureState) {
        if (this.context.store.getState().state.mode === 'flashcardFront') {
            this.context.store.dispatch({type: 'FLASHCARD_BACK_MODE'});
            this.refs[FC_NAV_REF].push({
                index: 2
            });
        }
        else if (this.context.store.getState().state.mode === 'flashcardHints') {
            this.context.store.dispatch({type: 'FLASHCARD_FRONT_MODE'});
            this.refs[FC_NAV_REF].pop();
        }
    }

    onSwipeDown(gestureState) {
        if (this.context.store.getState().state.mode === 'flashcardBack') {
            this.context.store.dispatch({type: 'FLASHCARD_FRONT_MODE'});
            this.refs[FC_NAV_REF].pop();
        }
        else if (this.context.store.getState().state.mode === 'flashcardFront') {
            this.context.store.dispatch({type: 'FLASHCARD_HINTS_MODE'});
            this.refs[FC_NAV_REF].push({
                index: 1
            });
        }
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
                                    .flashcards[this.state.flashcardIndex].front} />
                        } else if (route.index === 1) { // hints
                            return <FlashcardBack
                                navigator={navigator}
                                content={this.context.store.getState().flashcards.flashcardFolders
                                    .folders[this.context.store.getState().state.folderIndex]
                                    .flashcards[this.state.flashcardIndex].hints} />
                        } else if (route.index === 2) { // back
                            return <FlashcardBack
                                navigator={navigator}
                                content={this.context.store.getState().flashcards.flashcardFolders
                                    .folders[this.context.store.getState().state.folderIndex]
                                    .flashcards[this.state.flashcardIndex].back}
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
