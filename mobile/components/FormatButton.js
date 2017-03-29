import React, { Component } from 'react';
import {
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class FormatButton extends Component {

    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor='rgba(67, 65, 70, 1)'
                onPress={ () => {
                    this.props.appendFunction(this.props.appendText, this.props.isBlock);
                }}>
                <Icon name={this.props.name} size={24} color='black' />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 28,
        width: 28,
        borderRadius: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
