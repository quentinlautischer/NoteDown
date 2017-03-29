
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
import MenuScene from './MenuScene'
import NotesViewScene from './NotesViewScene';
import NotesEditScene from './NotesEditScene';
import FlashcardViewScene from './FlashcardViewScene';

import { connect } from 'react-redux';

class Navigate extends Component {

    renderScene(route, navigator) { // https://medium.com/react-native-training/react-native-navigator-navigating-like-a-pro-in-react-native-3cb1b6dc1e30#.x6jt1nunt; accessed 03/27/17
        return React.createElement(route.component, { ...this.props, ...route.passProps, route, navigator } )
    }

    render() {
        return (
            <Navigator
                initialRoute={{ component: LoginScene, title: 'LoginScene' }}
                renderScene={ this.renderScene }
                configureScene={(route, routeStack) => {
                    if (route.title == 'MenuScene') {
                        return Navigator.SceneConfigs.VerticalUpSwipeJump
                    } else {
                        return Navigator.SceneConfigs.PushFromRight
                    }
                }}
                navigationBar={
                    <Navigator.NavigationBar
                    routeMapper={{
                        LeftButton: (route, navigator, index, navState) => {
                            if (route.title == 'LoginScene') {
                                return null;
                            } else if (route.title == 'MenuScene') {
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
                            if (route.title == 'NotesViewScene') {
                                return(
                                    <TouchableHighlight
                                        style={styles.navButton}
                                        onPress={() =>
                                            navigator.push({
                                                component: FlashcardViewScene,
                                                passProps: {
                                                    content: route.content
                                                }
                                            })
                                        }>
                                        <Text>Go to Flashcards</Text>
                                    </TouchableHighlight>
                                );
                            } else if (route.title == 'NotesEditScene') {
                                return(
                                    <TouchableHighlight
                                        style={styles.navButton}
                                        onPress={route.onPress}>
                                        <Icon name='cloud-upload' size={28} color='#000000' />
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
    }
});

Navigate.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default connect()(Navigate);
