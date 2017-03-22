import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CameraScene extends Component {
    takePicture() {
        this.camera.capture()
        .then((data) => console.log(data))
        .catch(err => console.error(err));
    }

    render() {
        return(
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <TouchableHighlight
                        style={styles.capture}
                        onPress={this.takePicture.bind(this)}>
                        <Icon name='camera' size={28} color='#000000' />
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
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        margin: 40
    }
});
