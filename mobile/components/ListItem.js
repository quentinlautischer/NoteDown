import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ListItem extends Component {
    // how to use TouchableHighlight with custom Component
    // https://til.hashrocket.com/posts/e956265664-touchablehighlight-with-custom-component
    // accessed 03/18/17
    render() {
        return(
            <View ref='container' style={styles.listItem}>
                <Icon name={this.props.iconName} size={35} color='#000000' />
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
        backgroundColor: 'white',
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
        marginLeft: 20
    }
});
