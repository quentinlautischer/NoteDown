/*
Relevant requirements:
- FU-31: Mobile: Camera Mode
*/

import React, { Component } from 'react';
import {
    View,
    Text,
    CameraRoll,
    StyleSheet,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import constants from '../app/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNFetchBlob from 'react-native-fetch-blob';
import ImageResizer from 'react-native-image-resizer';
import Toast from 'react-native-root-toast';
import Image from 'react-native-image-progress';
import Progress from 'react-native-progress/Bar';

class PhotoConfirmScene extends Component {

    onPress() {
        this.compressPhoto();
    }

    compressPhoto() {
        ImageResizer.createResizedImage(this.props.image.path, constants.IMG_SIZE, constants.IMG_SIZE, 'JPEG', 100, 0, null).then((resizeImageUri) => {
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
                    indicator={Progress.Pie}
                    indicatorProps={{
                        size: 60,
                        borderWidth: 0,
                        color: constants.DARK,
                    }}
                    style={styles.img}
                />
                <TouchableHighlight
                    style={styles.check}
                    onPress={this.onPress.bind(this)}>
                    <Icon name='check' size={35} color={constants.DARK} />
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
        backgroundColor: constants.PRIMARY1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wheelContainer: {
        flex: 1,
        marginTop:40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wheel: {
        height: 80
    }
});

PhotoConfirmScene.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default connect()(PhotoConfirmScene);
