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
            text: this.props.folder.pages[this.props.index].content
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
                        this.props.socket.emit('request-push-data', this.props.content.data);
                        console.log('pushed');
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
