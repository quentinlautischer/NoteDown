import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    WebView,
    StyleSheet
} from 'react-native';

styles = require('../highlight.js.styles.js');

import parse from '../shared/parser.js';

export default class NotesView extends Component {

    generateTOC(renderedContent) {
        console.log('height: ' + this.props.height);
        return `<div style="padding:10px">${renderedContent}</div><div style="position:fixed;padding:10px;overflow-y:auto;bottom:0;height:${this.props.height}%;width:100%;background-color:white"><p>text below</p><p>text below</p><p>text below</p><p>text below</p><p>text below</p></div>`;
    }


    render() {
        var imageMapper = function(guid, store){
            var state = store.getState();
            var images = state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex].images;
            var i;
            for(i = 0; i < images.length; i++) {
                if (images[i].guid == guid) {
                    return images[i].data;
                }
            }
        }

        var renderedContent = this.generateTOC(parse.parse(this.props.content, this.props.store, imageMapper));
        let jsCode = `
            document.querySelector("h1").style.backgroundColor = "red";
        `;

        return (
            <WebView
                source={{html: renderedContent}}
                injectedJavaScript={jsCode}
                javaScriptEnabledAndroid={true}
            />
        )
    }
}
