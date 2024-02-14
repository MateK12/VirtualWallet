import React from 'react'
import { View, StyleSheet, Text, Pressable, Image } from 'react-native'
const ButtonGroup = () => {
    return (
        <View>
            <View style={styles.btnsCont}>
                <View style={styles.btnContCenter}>
                    <Pressable style={styles.btn}>
                        <Image style={styles.imgs} source={require('../../../assets/img/qr.png')}></Image>
                    </Pressable>
                    <Text style={styles.btnText}>Escanear QR</Text>
                </View>
                <View style={styles.btnContCenter}>
                    <Pressable style={styles.btn}>
                        <Image style={styles.imgs} source={require('../../../assets/img/transfer.png')}></Image>
                    </Pressable>
                    <Text style={styles.btnText}>Transferir</Text>
                </View>
            </View>
            <View style={styles.btnsCont}>
                <View style={styles.btnContCenter}>
                    <Pressable style={styles.btn}>
                        <Image style={styles.imgs} source={require('../../../assets/img/pay.png')}></Image>
                    </Pressable>
                    <Text style={styles.btnText}>Pagar</Text>
                </View>
                <View style={styles.btnContCenter}>
                    <Pressable style={styles.btn}>
                        <Image style={styles.imgs} source={require('../../../assets/img/more.png')}></Image>
                    </Pressable>
                    <Text style={styles.btnText}>Mas</Text>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    btnsCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    btn: {
        backgroundColor: 'white',
        marginRight: 30,
        width: 100,
        height: 100,
        borderRadius: 10,
        elevation: 3,
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        padding: 10
    },
    imgs: {
        width: 80,
        height: 80
    },
    btnContCenter: {
        width: 'fit-content',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 20,
    }

})
export default ButtonGroup