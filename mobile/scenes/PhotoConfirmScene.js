import React, { Component } from 'react';
import {
    View,
    Text,
    CameraRoll,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';
import colors from '../app/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNFetchBlob from 'react-native-fetch-blob';

export default class PhotoConfirmScene extends Component {
    encodePhoto() {
        let data = ''
        RNFetchBlob.fs.readStream(
            this.props.image.path, // path to photo
            'base64', // encoding type
            4095) // buffer size
            .then((ifstream) => {
                ifstream.open()
                ifstream.onData((chunk) => {
                    data += chunk
                })
                ifstream.onError((err) => {
                    console.log('oops', err)
                    // maybe should alert user or something
                })
                ifstream.onEnd(() => {
                    this.props.socket.emit('request-photo-put', { 'photo': data });
                })
            })
            this.props.navigator.pop();
    }

    render() {
        return(
            <View style={styles.container}>
                <Image
                    source={{uri: this.props.image.path}}
                    style={styles.img}
                />
                <TouchableHighlight
                    style={styles.check}
                    onPress={this.encodePhoto.bind(this)}>
                    <Icon name='check' size={35} color={colors.DARK} />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:40
    },
    img: {
        flex: 9
    },
    check: {
        flex: 1,
        backgroundColor: colors.PRIMARY1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
