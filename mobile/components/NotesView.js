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
        return `<div style="padding:10px">${renderedContent}</div><div id='toc' style="position:fixed;padding:10px;overflow-y:auto;bottom:0;height:${this.props.height}%;width:100%;background-color:white"><ul id='toc-list'></ul></div>`;
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
            var tags = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            for (var i = 0; i < tags.length; i++) {
                var h = tags[i];
                var headerId = 'header' + i;
                h.id = headerId;
                var li = document.createElement("li");

                var a = document.createElement('a');
                a.setAttribute('href', '#' + headerId);
                a.innerHTML = h.innerHTML;

                li.appendChild(a);
                document.getElementById('toc-list').appendChild(li);
            }
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
