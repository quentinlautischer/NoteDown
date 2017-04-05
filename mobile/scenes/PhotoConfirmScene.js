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
import ImageResizer from 'react-native-image-resizer';
import Toast from 'react-native-root-toast';

export default class PhotoConfirmScene extends Component {
    onPress() {
        this.compressPhoto();
    }

    compressPhoto() {
        console.log('PATH: ' + this.props.image.path);
        ImageResizer.createResizedImage(this.props.image.path, 300, 300, 'JPEG', 100, 0, null).then((resizeImageUri) => {
            console.log('Compression complete, photo at ' + resizeImageUri);
            this.encodePhoto(resizeImageUri);
        }).catch((err) => {
            // something went wrong
            console.log('Compression error ' + err);
        });
    }

    encodePhoto(resizeImageUri) {
        let data = ''
        RNFetchBlob.fs.readStream(
            resizeImageUri, // path to photo
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

    callToast(msg) {
        let toast = Toast.show(msg, {
            duration: 1400, // ms
            position: 0, // middle of screen
            shadow: true
        });
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
                    onPress={this.onPress.bind(this)}>
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
