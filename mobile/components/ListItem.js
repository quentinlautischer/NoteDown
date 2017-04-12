/*
Used for both folder and flashcard deck menus.

Relevant requirements:
- FU-20: Mobile: Flashcards: View
- FU-25: Mobile: Folder System: Navigation
- FU-26: Mobile: Folder System: Open
*/

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import colors from '../app/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ListItem extends Component {
    // how to use TouchableHighlight with custom Component
    // https://til.hashrocket.com/posts/e956265664-touchablehighlight-with-custom-component
    // accessed 03/18/17
    render() {
        return(
            <View ref='container' style={styles.listItem}>
                <Icon name={this.props.iconName} size={35} color={colors.LIGHT} />
                <Text style={styles.listItemText}>{this.props.text}</Text>
            </View>
        );
    }

    // required to use custom Component in TouchableHighlight
    setNativeProps(nativeProps) {
        this.refs.container.setNativeProps(nativeProps);
    }
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: colors.DARK2,
        marginTop: 4,
        marginBottom: 4,
        marginRight: 8,
        marginLeft: 8,
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        padding: 20,
        padding: 20,
        borderRadius: 5
    },
    listItemText: {
        color: colors.LIGHT,
        fontSize: 20,
        marginLeft: 20
    }
});
