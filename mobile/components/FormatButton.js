/*
Relevant requirements:
- FU-29: Mobile: Editor: Quick Edit
*/

import React, { Component } from 'react';
import {
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import colors from '../app/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class FormatButton extends Component {

    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor={colors.MED}
                onPress={ () => {
                    this.props.appendFunction(this.props.appendText, this.props.isBlock);
                }}>
                <Icon name={this.props.name} size={24} color={colors.DARK} />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 28,
        width: 28,
        borderRadius: 2,
        backgroundColor: colors.LIGHT,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
