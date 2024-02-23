// expo install expo-camera
// expo install expo-media-library
// expo install expo-sharing
// expo install expo-av
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Camerabutton from '../Validations/Camerabutton';
import { Video } from 'expo-av'
import { SafeAreaView } from 'react-native-safe-area-context';
import { shareAsync } from 'expo-sharing';

const VideoValidator = () => {
  const [hasCameraPermission, sethasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();

  const [IsRecording, setIsRecording] = useState(false);
  const [video, setvideo] = useState();
  const cameraRef = useRef();
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync() // I request the permission for camera
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync(); //the same for the media library

      console.log('asks for permission');
      sethasCameraPermission(cameraPermission.status == 'granted');
      setHasMediaLibraryPermission(mediaLibraryPermission.status == 'granted')
    })()
  }, [])
  if (hasCameraPermission == undefined) {
    return <Text>Esperando permisos... </Text>
  } else if (!hasCameraPermission) {
    return <Text>Permisos no entregados</Text>
  }

  const recordVideo = () => {
    setIsRecording(true);
    console.log('recording');
    let options = {
      maxDuration: 3,
      mute: true
    }
    cameraRef.current.recordAsync(options).then((recordedVideo) => {
      setvideo(recordedVideo);
      console.log(recordVideo);
      setIsRecording(false)
    });
  }

  const stopRecording = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  }

  const SaveVideo = async () => {
    MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
      console.log('video saved');
    })
  }
  if (video) {
    let shareVideo = () => {
      console.log('---');
      shareAsync(video.uri).then(() => {
        setvideo(undefined);
      });
    };
    return (
      <SafeAreaView>
        <Video
          source={{ uri: video.uri }}
          useNativeControls
          resizeMode='contain'
          isLooping
          style={styles.videoCont}
        />
        <View style={styles.optionBtn}>
          <Camerabutton onPress={shareVideo} color={'white'} icon={'share'}></Camerabutton>
          <Camerabutton color={'white'} icon={'trash'} onPress={() => { setvideo(undefined) }} ></Camerabutton>
        </View>
      </SafeAreaView>
    )
  }
  return (
    <View style={styles.cameraCont}>

      <Camera ref={cameraRef} style={styles.camera}>
        <TouchableOpacity style={styles.btnRecord} >
          <Camerabutton color={IsRecording ? 'red' : 'white'} icon={'camera'} onPress={IsRecording ? stopRecording : recordVideo}></Camerabutton>
        </TouchableOpacity>
      </Camera>
    </View>
  )
}
const styles = StyleSheet.create({
  cameraCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  camera: {
    height: '100%',
    width: '100%'

  },
  txt: {
    color: 'white'
  },
  btnRecord: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'flex-end'

  },
  videoCont: {
    height: 500
  },
  optionBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
export default VideoValidator