import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

export default class LoginInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        }
    }

    render() {
        return(
            <View style={styles.textInputContainer}>
                <TextInput
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
        borderColor:'white',
        marginBottom:10
    }
});
