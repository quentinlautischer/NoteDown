import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';
import colors from '../app/constants';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PhotoConfirmScene from './PhotoConfirmScene';

export default class CameraScene extends Component {
    takePicture() {
        this.camera.capture()
        .then((data) => this._navigate(data))
        .catch(err => console.error(err));
    }

    _navigate(data) {
        this.props.navigator.push({
            title: 'PhotoConfirmScene',
            component: PhotoConfirmScene,
            passProps: {
                image: data,
                socket: this.props.socket
            }
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    captureTarget={Camera.constants.CaptureTarget.temp}>
                    <TouchableHighlight
                        style={styles.capture}
                        onPress={this.takePicture.bind(this)}>
                        <Icon name='camera' size={35} color={colors.LIGHT} />
                    </TouchableHighlight>
                </Camera>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop:40
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        padding: 12,
        borderRadius: 10,
        backgroundColor: colors.DARK2,
        marginBottom: 40
    }
});
