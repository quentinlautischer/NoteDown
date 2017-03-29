import React, { Component } from 'react';
import {
    View,
    TextInput,
    Navigator,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

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
        this.updateContent(this.getContent() + text);
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
        // this.requestPushData(); // for autosave
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

    requestPushData() {
        console.log("requesting data push");
        var state = this.context.store.getState();
        const data = {userid: state.state.userid, notes: state.notes};
        // this.props.socket.emit('request-push-data', data);
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
                    autoFocus={true}
                    onChangeText={ (text) => {
                        this.handleChange(text);
                    }}
                    value={ this.state.content }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop:45,
        backgroundColor: 'white'
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
