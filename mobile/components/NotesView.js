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
import colors from '../app/constants';
import parse from '../shared/parser.js';

export default class NotesView extends Component {

    generateTOC(renderedContent) {
        // the negative margins correct a weird error where the webview doesn't touch the edges
        return `<style>${linkStyling}</style><div style="padding:10px;margin-top:-8px;margin-right:-8px;margin-bottom:-8px;background-color:${colors.LIGHT}">${renderedContent}</div><div id='toc' style="position:fixed;padding:10px;overflow-y:auto;bottom:0;height:${this.props.height}%;width:100%;background-color:#303e4d;visibility:${this.props.visibility}"></div>`;
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
                var p = document.createElement("p");

                var a = document.createElement('a');
                a.setAttribute('href', '#' + headerId);
                a.innerHTML = h.innerHTML;
                a.style.textDecoration = 'none';
                a.style.link

                p.style.textIndent = getSpaces(h) + 'em';
                p.appendChild(a);

                var toc = document.getElementById('toc');
                toc.appendChild(p);
            }

            // returns 0-5 depending on header type
            function getSpaces(h) {
                return parseInt(h.tagName[1]) - 1;
            }
            `;

        return (
            <WebView
                style={styles.view}
                source={{html: renderedContent}}
                injectedJavaScript={jsCode}
                javaScriptEnabledAndroid={true}
            />
        )
    }
}



var linkStyling = `
    #toc a:link {
        color: #fed75e;
    }

    #toc a:visited {
        color: #fed75e;
    }

    #toc a:hover {
        color: #feb255;
    }

    #toc a:active {
        color: #feb255;
    }
`;

const styles = StyleSheet.create({
    view: {
        marginLeft: -8 // super hacky fix
    }
})
