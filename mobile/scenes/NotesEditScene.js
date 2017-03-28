import React, { Component } from 'react';
import {
    View,
    TextInput,
    Navigator,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class NotesEditScene extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.content.data.notes.folders[this.props.folderIndex].pages[this.props.pageIndex].content
        }
    }

    render() {
        return (
            <View style={styles.view}>
                <TextInput
                    style={styles.editor}
                    multiline={true}
                    autoFocus={true}
                    onChangeText={(text) => {
                        this.setState({text});
                        var myData = this.props.content.data;
                        console.log('ID ' + myData.userid);
                        myData.notes.folders[this.props.folderIndex].pages[this.props.pageIndex].content = this.state.text;
                        myData.userid = myData.notes.userid;
                        this.props.socket.emit('request-push-data', myData);
                    }}
                    value={this.state.text}
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
