import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class NotesEditScene extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text>Edit Notes Here</Text>
                <Text>Editing {this.props.content.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        marginTop:45
    }
});
