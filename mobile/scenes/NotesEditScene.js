import React, { Component } from 'react';
import {
    View,
    TextInput,
    Navigator,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../app/constants';
import ButtonPanel from '../components/ButtonPanel'

class NotesEditScene extends Component {
    constructor(props) {
        super(props);

        this.state = {
          open: false,
          content: ''
        }

        this.storeDidUpdate = this.storeDidUpdate.bind(this);

        this.unsubscribe = null;
    }

    insertShortcutText(text, isBlock) {
        if (isBlock) text = '\n' + text; // put block elements on new line
        var content = this.getContent();
        var cursorPosition = this.context.store.getState().editor.cursor_position;
        this.updateContent(content.substring(0, cursorPosition) + text + content.substring(cursorPosition, content.length));
    }

    componentDidMount(){
        this.unsubscribe = this.context.store.subscribe( this.storeDidUpdate );
        var text = this.getContent();
        this.setState({ content: text });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleChange(text) {
        this.updateContent(text);
    }

    handleCursorChange(selection) {
        this.context.store.dispatch({type: 'CURSOR_CHANGE', position: selection.start});
        console.log(`cursor position: ${this.context.store.getState().editor.cursor_position}`);
    }

    updateContent(text) {
        this.context.store.dispatch({type: 'PAGE_CONTENT_CHANGE',
            content: text,
            folderIndex: this.context.store.getState().state.folderIndex,
            pageIndex: this.context.store.getState().state.pageIndex
        });
        this.setState({ content: this.getContent() });
    }

    storeDidUpdate(){
        this.setState({open: this.context.store.getState().sessionActive});
        this.setState({ content: this.getContent() });
    }

    getContent() {
        var state = this.context.store.getState();
        return state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex].content;
    }

    render() {
        return (
            <View style={styles.view}>
                <ButtonPanel func={this.insertShortcutText.bind(this)} />
                <TextInput
                    style={styles.editor}
                    multiline={true}
                    onChangeText={ (text) => {
                        this.handleChange(text);
                    }}
                    value={ this.state.content }
                    onSelectionChange={(event) => {
                        this.handleCursorChange(event.nativeEvent.selection);
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop:45,
        backgroundColor: colors.LIGHT
    },
    editor: {
        flex: 1,
        textAlignVertical: 'top',
        padding: 15
    }
});

NotesEditScene.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default connect()(NotesEditScene);
