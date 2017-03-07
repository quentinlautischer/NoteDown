import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    WebView
} from 'react-native';

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
            // <View>
            //     <Text>This is the notes view scene.</Text>
            //     <Text>Viewing {this.props.content}</Text>
            //     <TouchableHighlight onPress = {
            //         this.navigate.bind(this, 'Edit Notes')
            //     }>
            //         <Text>Edit Notes</Text>
            //     </TouchableHighlight>
            //     <TouchableHighlight onPress = {
            //         this.navigate.bind(this, 'View Flashcard')
            //     }>
            //         <Text>View Flashcards</Text>
            //     </TouchableHighlight>
                <WebView
                    style={{
                        backgroundColor: 'white',
                        height: 100,
                    }}
                    source={{html: HTML}}
                    // scalesPageToFit={true}
                />
            // </View>
        )
    }
}
