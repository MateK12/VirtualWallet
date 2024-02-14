import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Camerabutton from './Camerabutton';
import Icon from 'react-native-vector-icons/FontAwesome';
const Identification = ({ navigation }) => {
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraAccess, setcameraAccess] = useState(null)
    const [image, setimage] = useState(null);
    const [flash, setflash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null)

    useEffect(() => {
        (async () => { //get permissions
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setcameraAccess(cameraStatus.granted == 'granted')
            if (cameraStatus.granted != 'granted') {
                return <Text>Porfavor, permite el acceso a la camara</Text>
            }
        })(); //this way I ran the function automatically shortcut
    }, [])
    const TakePhoto = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync()
                console.log(data);
                setimage(data.uri)
            } catch (error) {
                console.log('an error ocurred: ' + error);
            }
        }
    }
    const savePhoto = async () => {
        if (image) {
            try {
                await MediaLibrary.createAssetAsync(image);
                Alert.alert('Imagen Guardada con exito');
                setimage(null);
                setTimeout(() => {
                    navigation.navigate('VideoValidator')
                }, 3000)
            } catch (e) {
                console.log('an error ocurred while saving the photo: ' + e);
            }
        }
    }
    // <View style={{
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     padding: 20
    // }}>
    //     <Icon color={'white'} name='retweet' size={30} onPress={() => { setType(type === CameraType.back ? CameraType.front : CameraType.back) }} />
    //     <Icon color={'white'} name={'flash'} size={30} onPress={() => { setflash(flash == Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off) }} />
    // </View>
    return (
        <View style={styles.cont}>
            {!image ?
                <Camera
                    type={type}
                    flashMode={flash}
                    ref={cameraRef}
                    style={styles.camera}
                >
                </Camera>



                :
                <Image source={{ uri: image }} style={styles.camera}></Image>
            }
            <View>
                {image ?
                    <View style={styles.btns}>
                        <Camerabutton title={'Retomar foto'} icon='retweet' onPress={() => setimage(null)}></Camerabutton>
                        <Camerabutton title={'Guardar foto'} icon='check' onPress={savePhoto}></Camerabutton>
                    </View>
                    :
                    <View style={styles.cnt}>
                        <Camerabutton title={'Tomar foto'} icon='camera' onPress={TakePhoto}></Camerabutton>
                        <TouchableOpacity onPress={() => { setType(type === CameraType.back ? CameraType.front : CameraType.back) }} style={styles.btns}>
                            <Icon color={'black'} name='retweet' size={30} onPress={() => { setType(type === CameraType.back ? CameraType.front : CameraType.back) }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setflash(flash === Camera.Constants.FlashMode.on ? Camera.Constants.FlashMode.off : Camera.Constants.FlashMode.on) }}>
                            <Icon color={'black'} name={flash === Camera.Constants.FlashMode.off ? 'flash' : 'flash-off'} size={30} />

                        </TouchableOpacity>
                    </View>

                }
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    cnt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    camera: {
        flex: 1,
        borderRadius: 20
    },
    cont: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Identification