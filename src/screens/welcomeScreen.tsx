import * as React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import BaseScreen from '../components/baseScreen';
import images from '../images';
import Camera from 'react-native-camera';
import ImageRecognizer from '../ImageRecognizer'

export class WelcomeScreen extends React.Component {
    camera: any;
    recognizer: any;
    componentDidMount() {
        this.recognizer = new ImageRecognizer({
            model: require('../../assets/model.pb'),
            labels: require('../../assets/labels.txt'),
        });
    }
    render() {
        return (
            <View style={{ flex: 1 }} testID="welcomeScreen" accessibilityLabel={"welcomeScreen"} accessible={true}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    captureTarget={
                        Platform.OS == 'ios' 
                        ? Camera.constants.CaptureTarget.disk
                        : Camera.constants.CaptureTarget.cameraRoll
                    }
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                </Camera>
                <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                    Capture
                </Text>
            </View>
        );
    }
    async takePicture() {
        const options = {};
        try {
            const data = await this.camera.capture({ 
                metadata: options, 
                captureTarget: Camera.constants.CaptureTarget.temp, 
                captureQuality: Camera.constants.CaptureQuality["480p"]
            });
            if(data) {
                alert(data.path);
                const results = await this.recognizer.recognize({
                    image: data.path,
                    inputName: 'Placeholder',
                    outputName: 'loss',
                });
                if (results.length > 0) {
                    alert(`Name: ${results[0].name} - Confidence: ${results[0].confidence}`);
                } else {
                    alert(`Nada...`);
                }
            }
        }
        catch (err) {
            alert(err);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});