import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Text
} from 'react-native';
import FormatButton from './FormatButton';

export default class ButtonPanel extends Component {
    render() {
        return(
            <View style={styles.panel}>
                <FormatButton name='format-bold' appendText='**text**' isBlock={false} appendFunction={this.props.func} />
                <FormatButton name='format-italic' appendText='*text*' isBlock={false} appendFunction={this.props.func} />
                <FormatButton name='format-header-1' appendText='# ' isBlock={true} appendFunction={this.props.func} />
                <FormatButton name='format-header-2' appendText='## ' isBlock={true} appendFunction={this.props.func} />
                <FormatButton name='format-header-3' appendText='### ' isBlock={true} appendFunction={this.props.func} />
                <FormatButton name='format-header-4' appendText='#### ' isBlock={true} appendFunction={this.props.func} />
                <FormatButton name='format-header-5' appendText='##### ' isBlock={true} appendFunction={this.props.func} />
                <FormatButton name='format-header-6' appendText='###### ' isBlock={true} appendFunction={this.props.func} />
                <FormatButton name='format-list-bulleted' appendText='* ' isBlock={true} appendFunction={this.props.func} />
                <FormatButton name='format-list-numbers' appendText='1. ' isBlock={true} appendFunction={this.props.func} />
                <FormatButton name='link-variant' appendText='[title](http://)' isBlock={false} appendFunction={this.props.func} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    panel: {
        height: 40,
        paddingLeft: 4,
        paddingRight: 4,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})
