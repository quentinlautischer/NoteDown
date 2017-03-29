import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Text
} from 'react-native'

export default class ButtonPanel extends Component {
    render() {
        return(
            <View style={styles.panel}>
                <TouchableHighlight style={styles.button}>
                    <Text>B</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text>I</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text>H1</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text>H2</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text>H3</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text>*</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text>1.</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text>lnk</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    panel: {
        height: 40,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        height: 30,
        width: 30,
        margin: 2,
        borderRadius: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
