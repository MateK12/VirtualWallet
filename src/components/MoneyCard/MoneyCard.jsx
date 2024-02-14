import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Pressable, Image, Modal, TouchableOpacity } from 'react-native';
import { FormatCurrency } from '../../helpers/usd';
import { formatCurrencyToARS } from '../../helpers/ars';
import CBU from './CBU';
const MoneyCard = ({ navigation }) => {

    const [Visibility, setVisibility] = useState(true)
    const [CBUVisibily, setCBUVisibily] = useState(false);
    const [Money, setMoney] = useState(100000)
    const OnVisibilityChange = () => {
        setVisibility(!Visibility)
    }
    const goToTransfer = () => {
        navigation.navigate('Transfer')
    }
    return (
        <View style={styles.cont}>
            <View style={styles.VisibilityCont}>
                <Pressable onPress={() => { setVisibility(!Visibility) }}>
                    {Visibility ? (<Image source={require('../../../assets/img/visible.png')}></Image>) : (<Image source={require('../../../assets/img/Invisible.png')}></Image>)}
                </Pressable>
            </View>
            <Text style={styles.moneyTxt}>

                ARS {Visibility ? formatCurrencyToARS(Money) : '*****'}
            </Text>
            <Text style={styles.moneyTxt}>USD {Visibility ? FormatCurrency(Money) : '*****'}</Text>
            <View style={styles.btnCont}>
                <Pressable style={styles.btns} onPress={() => { goToTransfer() }}>
                    <Text>Transferir</Text>
                </Pressable>
                <TouchableOpacity style={styles.btns} onPress={() => { setCBUVisibily(true) }}>
                    <Text>Mi CBU</Text>
                </TouchableOpacity>
                <Pressable style={styles.btns}>
                    <Text>Ingresar</Text>
                </Pressable>

                <Modal visible={CBUVisibily}>
                    <CBU Money={Money} setCBUvisibilty={setCBUVisibily} userInfo={{ cbu: 74847497292728, name: 'John Doe', alias: 'tecla.tapon.rueda' }}></CBU>
                </Modal>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cont: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        height: 210,
        width: 320
    },
    moneyTxt: {
        fontSize: 25
    },
    VisibilityCont: {
        marginBottom: 10,
    },
    btnCont: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btns: {
        width: 90,
        height: 60,
        backgroundColor: '#EEE',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,

    }
})
export default MoneyCard