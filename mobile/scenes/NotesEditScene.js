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
            text: this.props.content.pages[this.props.index].content
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
