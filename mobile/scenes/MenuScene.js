import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class MenuScene extends Component {
    navigate(){
        this.props.navigator.push({
            title: arguments[0],
            content: this.props.content
        })
    }

    render() {
        return (
            <View style={styles.view}>
                <TouchableHighlight
                    style={styles.loginButton}
                    onPress = {
                        this.navigate.bind(this, 'Folders')
                    }>
                    <Text>Folders</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.loginButton}
                    onPress = {
                        this.navigate.bind(this, 'Flashcards Menu')
                    }>
                    <Text>Flashcards</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    view: {
        backgroundColor: '#0aaf82',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        backgroundColor: 'white',
        borderRadius: 4,
        width: 200,
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
