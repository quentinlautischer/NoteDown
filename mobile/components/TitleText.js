import React, { Component } from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';
import colors from '../app/constants';

export default class TitleText extends Component {
    render() {
        return(
            <Text style={styles.text}>{this.props.text}</Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign:'center',
        fontSize: 20,
        padding:10,
        color: colors.DARK,
        fontWeight: 'bold'
    }
});
