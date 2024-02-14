import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import GlobalStyles from '../../styles';
const Camerabutton = ({ title, onPress, icon, color }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, GlobalStyles.elevation, GlobalStyles.primaryColor]}>
            <Entypo name={icon} size={28} color={color ? color : '#000000'}></Entypo>
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        borderRadius: 20,
        marginTop: 10

    },
    txt: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333333',
        marginLeft: 10
    },
    btn: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 40,
    }
})
export default Camerabutton