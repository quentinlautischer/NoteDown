import React, { Component } from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

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
        color:'black',
        color: '#434146',
        fontWeight: 'bold'
    }
});
