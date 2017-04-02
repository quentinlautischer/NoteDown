import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';
import colors from '../app/constants';

export default class LoginInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        }

        this.clearText = this.clearText.bind(this);
    }

    clearText() {
        this.setState({inputText: ''}); // resets the state
        this._textInput.setNativeProps({text: ''}); // clears the actual content
    }

    render() {
        return(
            <View style={styles.textInputContainer}>
                <TextInput
                    ref={component => this._textInput = component}
                    style={styles.textInput}
                    underlineColorAndroid='transparent'
                    placeholder={this.props.placeholder}
                    autoCorrect={false}
                    autoFocus={this.props.autoFocus}
                    autoCapitalize='none'
                    secureTextEntry={this.props.secure}
                    onChangeText={(text) => this.setState({ inputText: text })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width:220,
        height:50,
    },
    textInputContainer: {
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor: colors.LIGHT,
        marginBottom:10
    }
});
