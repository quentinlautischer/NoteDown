import React, { Component } from 'react';
import {
    View,
    TextInput,
    Navigator,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

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

    componentDidMount(){
        this.unsubscribe = this.context.store.subscribe( this.storeDidUpdate );
        var content = this.getContent();
        this.setState({ renderedContent: content });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleChange(content) {
        this.updateContent(content);
        this.setState({ content: content });
        this.requestPushData();
    }

    updateContent(content) {
        this.context.store.dispatch({type: 'PAGE_CONTENT_CHANGE',
            content: content,
            folderIndex: this.context.store.getState().state.folderIndex,
            pageIndex: this.context.store.getState().state.pageIndex
        });
    }

    storeDidUpdate(){
        this.setState({open: this.context.store.getState().sessionActive});
        this.setState({ content: this.getContent() });
    }

    requestPushData() {
        console.log("requesting data push");
        var state = this.context.store.getState();
        const data = {userid: state.state.userid, notes: state.notes};
        this.props.socket.emit('request-push-data', data); // ipc.send('request-push-data', data);
    }

    getContent() {
        var state = this.context.store.getState();
        return state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex].content;
    }

    render() {
        return (
            <View style={styles.view}>
                <TextInput
                    style={styles.editor}
                    multiline={true}
                    autoFocus={true}
                    onChangeText={ (text) => {
                        this.handleChange(text);
                    }}
                    value={ this.state.renderedContent }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop:45,
        backgroundColor: 'white',
        padding: 15
    },
    editor: {
        flex: 1,
        textAlignVertical: 'top'
    }
});

NotesEditScene.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default connect()(NotesEditScene);
