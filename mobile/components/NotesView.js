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

        return (
            <WebView
                source={{html: parse.parse(this.props.content, this.props.store, imageMapper)}}
            />
        )
    }
}
