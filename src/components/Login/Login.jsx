import React, { useState } from 'react'
import { View, Button, Text, ScrollView, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, Alert } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import GlobalStyles from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    })
    const onSubmit = (data) => {
        console.log(data);
        //send data to back
        if (data.username == 'hola' && data.password == 'mundo') {
            Alert.alert(`Bienvenido ${data.username}`, 'Un momento por favor')
            setTimeout(() => {
                navigation.navigate('IDvalidation')
            }, 2000)
        } else {
            Alert.alert('Credenciales incorrectas', 'El usuario y/o la contraseña son incorrectas')
        }

    }

    return (
        <ScrollView>

            <View style={[styles.formCont, GlobalStyles.elevation]}>
                <View style={styles.logo} >
                    <Image style={styles.img} source={require('../../../assets/img/logoRM.png')}></Image>
                </View>
                <View>
                    <Text style={styles.title}>
                        Iniciar sesión
                    </Text>
                </View>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <Text style={[styles.label]} >Usuario</Text>
                            <TextInput style={[styles.input, styles.margin]}
                                placeholder="Ingrese el usuario" //
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                    name="username"
                    rules={{ required: { value: true, message: 'Este campo es obligatorio' } }}
                />
                {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <Text style={[styles.label]}>Contraseña</Text>
                            <TextInput style={[styles.input, styles.margin]}
                                placeholder="Ingrese la contraseña" //
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={true}
                            />
                        </View>
                    )}
                    name="password"
                    rules={{ required: { value: true, message: 'Este campo es obligatorio' } }}
                />
                {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

                <TouchableOpacity style={[GlobalStyles.primaryColor, styles.btnSubmit, GlobalStyles.elevation, styles.margin]} title='Iniciar Sesion' onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.txt}>Iniciar sesion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.googleBtn, GlobalStyles.elevation, GlobalStyles.primaryColor, styles.margin]}>
                    <Image style={styles.imgGoogle} source={require('../../../assets/img/google.png')}></Image>
                    <Text style={styles.txt}>Iniciar sesion con google</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: '#6a647d',
        width: 300,
        color: '#333333'
    },
    formCont: {
        padding: '3%',
        backgroundColor: 'white',
        margin: '4%',
        alignItems: 'center',
        height: 600,

    },
    btnSubmit: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 40,
    },
    txt: {
        color: '#333333',
        fontSize: 17
    },
    input: {
        backgroundColor: '#f2f2f2',
        width: 300,
        borderRadius: 3
    },
    logo: {
        width: 'fit-content'
    },
    img: {
        width: 200,
        height: 130,
        marginBottom: 20
    },
    margin: {
        margin: 15
    },
    googleBtn: {
        width: '80%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 20,
        flexDirection: 'row'
    },
    imgGoogle: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    error: {
        color: '#d11919'
    },
    title: {
        fontSize: 25,
        marginBottom: 5,

    }
})
export default Login