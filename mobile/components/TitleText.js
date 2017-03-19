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
        // textShadowColor:'white',
        // textShadowOffset: {width: 1, height: 1},
        // textShadowRadius: 1,
        padding:10,
        color:'black'
    }
});
