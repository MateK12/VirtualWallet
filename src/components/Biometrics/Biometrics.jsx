import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as localAuthentication from 'expo-local-authentication';
const Biometrics = ({ navigation }) => {
    const [isBiometricsSupported, setisBiometricsSupported] = useState(false);
    const [isAuthenticated, setisAuthenticated] = useState(false)
    useEffect(() => {
        (async () => {
            const compatible = await localAuthentication.hasHardwareAsync(); //checks whether has the hardware or not
            setisBiometricsSupported(compatible) //this returns a boolean, and is saved in the state
        })();


    }, []);
    const OnAuthenticate = () => {
        const auth = localAuthentication.authenticateAsync({ //pass some options to the function
            promptMessage: 'Autenticar', // the message that will appear while authenticating
            fallbackLabel: 'ingresa la contraseña',
            cancelLabel: 'cancel',
            disableDeviceFallback: true, // disables the possibility of using another method when failing at first
        });
        auth.then(result => {
            setisAuthenticated(result.success); //result has the response:boolean (it has the info about the authentication)
            console.log(result);
            if (result.success) { //simple conditional
                navigation.navigate('LogIn')
            } else {
                console.log('????????');
            }
        })
    }
    return (
        <View>
            <Text>biometrics works!!</Text>
            <View>
                <Text>Probando el localauth</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => { OnAuthenticate() }} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', width: 300, height: 300 }}>
                    <Text>Probar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Biometrics