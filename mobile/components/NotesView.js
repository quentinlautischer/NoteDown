import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    WebView,
    StyleSheet
} from 'react-native';

import colors from '../app/constants';
import renderStyles from '../app/styles';
import parse from '../shared/parser.js';

export default class NotesView extends Component {

    generateTOC(renderedContent) {
        // the negative margins correct a weird error where the webview doesn't touch the edges
        return `<style>${renderStyles.HIGHLIGHT_STYLES + renderStyles.LINK_STYLES}</style><div style="padding:10px;margin-top:-8px;margin-right:-8px;margin-bottom:-8px;">${renderedContent}</div><div id='toc' style="position:fixed;padding:10px;overflow-y:auto;bottom:0;height:${this.props.height}%;width:100%;background-color:#303e4d;visibility:${this.props.visibility}"></div>`;
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

        return (
            <WebView
                style={styles.view}
                source={{html: renderedContent}}
                injectedJavaScript={renderStyles.TOC_GEN}
                javaScriptEnabledAndroid={true}
            />
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginLeft: -8 // super hacky fix
    }
})
