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
            this.props.content.path, // path to photo
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
