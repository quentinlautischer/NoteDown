import React, { Component } from 'react';
import {
    View,
    Text,
    CameraRoll,
    StyleSheet,
    Image
} from 'react-native';

export default class PhotoConfirmScene extends Component {
    render() {
        console.log(this.props.content);
        return(
            <View style={styles.container}>
                <Image
                    source={{uri: this.props.content.path}}
                    style={styles.img}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
        flex: 1
    }
});
