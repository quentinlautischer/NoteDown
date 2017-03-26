
import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableHighlight,
  StyleSheet,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScene from './LoginScene';
import MenuScene from './MenuScene';
import FoldersScene from './FoldersScene';
import FlashcardsMenuScene from './FlashcardsMenuScene';
import NotesViewScene from './NotesViewScene';
import NotesEditScene from './NotesEditScene';
import FlashcardViewScene from './FlashcardViewScene';
import CameraScene from './CameraScene';
import PhotoConfirmScene from './PhotoConfirmScene';

export default class Navigate extends Component {
    render() {
        // index is currently unused, but possibly we could use it instead of title
        // to identify scenes in renderScene. The reason I am not is that I find
        // it more intuitive to call scenes by what they do, rather than a meaningless
        // number I need to look up each time.
        const routes = [
            {title: 'Login'},
            {title: 'Main Menu'},
            {title: 'Folders'},
            {title: 'Flashcards Menu'},
            {title: 'View Notes'},
            {title: 'Edit Notes'},
            {title: 'View Flashcard'},
            {title: 'Camera'},
            {title: 'Confirm Photo'}
        ];
        return (
            <Navigator
                initialRoute={routes[0]}
                renderScene={(route, navigator) => {
                    if (route.title == 'Login') {
                        return <LoginScene navigator={navigator} />
                    } else if (route.title == 'Main Menu') {
                        return <MenuScene navigator={navigator} content={route.content} socket={route.socket} />
                    } else if (route.title === 'Folders') {
                        return <FoldersScene navigator={navigator} content={route.content} socket={route.socket} />
                    } else if (route.title === 'Flashcards Menu') {
                        return <FlashcardsMenuScene navigator={navigator} content={route.content} socket={route.socket} />
                    } else if (route.title === 'View Notes') {
                        return <NotesViewScene navigator={navigator} content={route.content} socket={route.socket} folder={route.folder} />
                    } else if (route.title === 'Edit Notes') {
                        return <NotesEditScene navigator={navigator} content={route.content} socket={route.socket} folder={route.folder} index={route.index} />
                    } else if (route.title === 'View Flashcard') {
                        return <FlashcardViewScene navigator={navigator}  content={route.content} socket={route.socket} />
                    } else if (route.title === 'Camera') {
                        return <CameraScene navigator={navigator} socket={route.socket} />
                    } else if (route.title === 'Confirm Photo') {
                        return <PhotoConfirmScene navigator={navigator} content={route.content} socket={route.socket} />
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
                                        <Icon name='arrow-left' size={28} color='#000000' />
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
                            } else if (route.title === 'Edit Notes') {
                                return(
                                    <TouchableHighlight
                                        style={styles.largeNavButton}
                                        onPress={navigator.__onRightNavButtonPressed}>
                                        <Icon name='content-save' size={35} color='#000000' />
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
        margin: 7 // keeps the button off the edge of the page
    },
    largeNavButton: {
        marginTop: 4,
        marginRight: 7
    }
});
