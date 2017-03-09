import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    WebView,
    StyleSheet
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Hello Static World</title>
    <style type="text/css">
      body {
        margin: 0;
        padding: 20px;
        font: serif;
        background-color: white;
      }
      h1 {
        margin: 0;
        text-align: center;
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Test notes</h1>
    <p>Here are my notes for a class.  They include lots of information, like this list:</p>
    <ol>
        <li>First point!</li>
        <li>Another point</li>
        <li>Last point</li>
    </ol>
    <p>My notes also contain a bunch of newlines to see if scrolling works</p>
    <br><br><br><br><br><br><br><br><br><br><br><br><br>
    <p>keep going, there's more text below</p>
    <br><br><br><br><br><br><br><br><br><br><br><br><br>
    <p>More text</p>
  </body>
</html>
`;

export default class NotesViewScene extends Component {
    navigate(){
        this.props.navigator.push({
            title: arguments[0],
            content: this.props.content
        })
    }

    render() {
        return (
            <View style={styles.view}>
                <WebView
                    // source={{html: HTML}} // uncomment (and comment line below) for a prettier example
                    source={{html: this.props.content.pages[0].content}}
                />
                <ActionButton
                    buttonColor='#0aaf82'
                    onPress = {
                        this.navigate.bind(this, 'Edit Notes')
                    }
                    icon={<Icon name="md-create" style={styles.actionButtonIcon} />}
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
});
