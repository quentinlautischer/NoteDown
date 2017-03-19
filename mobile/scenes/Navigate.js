
import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableHighlight,
  StyleSheet,
  Platform
} from 'react-native';

import LoginScene from './LoginScene';
import MenuScene from './MenuScene';
import FoldersScene from './FoldersScene';
import FlashcardsMenuScene from './FlashcardsMenuScene';
import NotesViewScene from './NotesViewScene';
import NotesEditScene from './NotesEditScene';
import FlashcardViewScene from './FlashcardViewScene';

export default class Navigate extends Component {
    render() {
        // index is currently unused, but possibly we could use it instead of title
        // to identify scenes in renderScene. The reason I am not is that I find
        // it more intuitive to call scenes by what they do, rather than a meaningless
        // number I need to look up each time.
        const routes = [
            {title: 'Login', index: 0},
            {title: 'Main Menu', index: 1},
            {title: 'Folders', index: 2},
            {title: 'Flashcards Menu', index: 3},
            {title: 'View Notes', index: 4},
            {title: 'Edit Notes', index: 5},
            {title: 'View Flashcard', index: 6}
        ];
        return (
            <Navigator
                initialRoute={routes[0]}
                renderScene={(route, navigator) => {
                    if (route.title == 'Login') {
                        return <LoginScene navigator={navigator} />
                    } else if (route.title == 'Main Menu') {
                        return <MenuScene navigator={navigator} content={route.content} />
                    } else if (route.title === 'Folders') {
                        return <FoldersScene navigator={navigator} content={route.content} />
                    } else if (route.title === 'Flashcards Menu') {
                        return <FlashcardsMenuScene navigator={navigator} content={route.content} />
                    } else if (route.title === 'View Notes') {
                        return <NotesViewScene navigator={navigator} content={route.content} />
                    } else if (route.title === 'Edit Notes') {
                        return <NotesEditScene navigator={navigator} content={route.content} />
                    } else if (route.title === 'View Flashcard') {
                        return <FlashcardViewScene navigator={navigator} content={route.content} />
                    } else {
                        return null;
                    }
                }}
                configureScene={(route, routeStack) => {
                    if (route.title == 'Main Menu') {
                        return Navigator.SceneConfigs.VerticalUpSwipeJump
                    } else {
                        return Navigator.SceneConfigs.PushFromRight
                    }
                }}
                navigationBar={
                    <Navigator.NavigationBar
                    routeMapper={{
                        LeftButton: (route, navigator, index, navState) => {
                            if (route.title === 'Login') {
                                return null;
                            } else if (route.title === 'Main Menu') {
                                return (
                                    <TouchableHighlight onPress={() => navigator.pop()}>
                                        <Text style={styles.navButton}>Logout</Text>
                                    </TouchableHighlight>
                                );
                            } else {
                                return (
                                    <TouchableHighlight
                                        style={styles.navButton}
                                        onPress={() => navigator.pop()}>
                                        <Text>Back</Text>
                                    </TouchableHighlight>
                                );
                            }
                        },
                        RightButton: (route, navigator, index, navState) => {
                            if (route.title === 'View Notes') {
                                return(
                                    <TouchableHighlight
                                        style={styles.navButton}
                                        onPress={() =>
                                            navigator.push({
                                                title: 'View Flashcard',
                                                content: route.content
                                            })
                                        }>
                                        <Text>Go to Flashcards</Text>
                                    </TouchableHighlight>
                                );
                            } else {
                                return null;
                            }
                        },
                        Title: (route, navigator, index, navState) =>
                            { return null; }
                    }}
                    />
                }
            style={styles.view}
            />
        );
    }
}

var styles = StyleSheet.create({
    view: {
        paddingTop: (Platform.OS === 'ios') ? 20 : 0, // pushes the content down the page
        backgroundColor: '#0aaf82'
    },
    navButton: {
        margin:10, // keeps the button off the edge of the page
        height:20
    }
});
