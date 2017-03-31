
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
import colors from '../app/constants';

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
                            if (route.title == 'LoginScene' || route.title == 'MenuScene') {
                                return null;
                            } else if (route.onBack) { // function & icon provided
                                return(
                                    <TouchableHighlight
                                        style={styles.navButton}
                                        onPress={route.onBack}>
                                        <Icon name={route.backIconName} size={28} color={colors.DARK} />
                                    </TouchableHighlight>
                                );
                            } else { // default back icon & nav pop
                                return (
                                    <TouchableHighlight
                                        style={styles.navButton}
                                        onPress={() => navigator.pop()}>
                                        <Icon name='arrow-left' size={28} color={colors.DARK} />
                                    </TouchableHighlight>
                                );
                            }
                        },
                        RightButton: (route, navigator, index, navState) => {
                            if (route.onPress) { // function & icon provided
                                return(
                                    <TouchableHighlight
                                        style={styles.navButton}
                                        onPress={route.onPress}>
                                        <Icon name={route.rightIconName} size={28} color={colors.DARK} />
                                    </TouchableHighlight>
                                );
                            } else { // default is no button
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
        backgroundColor: colors.PRIMARY1
    },
    navButton: {
        margin: 7 // keeps the button off the edge of the page
    }
});

Navigate.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default connect()(Navigate);
