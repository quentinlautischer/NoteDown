import React, { Component } from 'react';
import {
    View,
    Text,
    CameraRoll,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SocketIOClient from 'socket.io-client';
import RNFetchBlob from 'react-native-fetch-blob';

var HOST = "localhost"; // allows me to test on android
const PORT = '3000';

export default class PhotoConfirmScene extends Component {
    encodePhoto() {
        let data = ''
        RNFetchBlob.fs.readStream(
            // file path
            this.props.content.path,
            // encoding, should be one of `base64`, `utf8`, `ascii`
            'base64',
            // (optional) buffer size, default to 4096 (4095 for BASE64 encoded data)
            // when reading file in BASE64 encoding, buffer size must be multiples of 3.
            4095)
            .then((ifstream) => {
                ifstream.open()
                ifstream.onData((chunk) => {
                    // when encoding is `ascii`, chunk will be an array contains numbers
                    // otherwise it will be a string
                    data += chunk
                })
                ifstream.onError((err) => {
                    console.log('oops', err)
                })
                ifstream.onEnd(() => {
                    // this.socket = SocketIOClient('http://' + HOST + ':' + PORT);
                    this.props.socket.emit('request-photo-supply', { 'photo': data });
                })
            })
    }

    render() {
        console.log(this.props.content);
        return(
            <View style={styles.container}>
                <Image
                    source={{uri: this.props.content.path}}
                    style={styles.img}
                />
                <TouchableHighlight
                    style={styles.check}
                    onPress={this.encodePhoto.bind(this)}>
                    <Icon name='check' size={28} color='#ffffff' />
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
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
