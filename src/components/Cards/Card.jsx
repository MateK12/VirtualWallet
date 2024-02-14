import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Pressable, Modal, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../styles';
import ModalCard from './ModalCard';
const Card = ({ brand, number, owner, securityCode, expiryDate }) => {
    const [Visible, setVisible] = useState(false);
    const [splitedNumber, setsplitedNumber] = useState('')
    useEffect(() => {
        const splitnumber = number.toString().split('');
        let lastFourDigits = []
        for (let i = 0; i < splitnumber.length; i++) {
            if (splitnumber.length - i <= 4) {
                lastFourDigits.push(splitnumber[i])
            }
        }
        setsplitedNumber(lastFourDigits.join(''))
    }, [])
    return (

        <View style={[Styles.CardCont, GlobalStyles.elevation, GlobalStyles.primaryColor]}>
            <Pressable onPress={() => { setVisible(true) }}>
                <View style={Styles.logoNumber}>

                    <View style={Styles.logoCont}>
                        {brand == 'Visa' ? (<Image style={Styles.brandLogo} source={require('../../../assets/img/visa.png')} >
                        </Image>) : null}
                        {brand == 'MasterCard' ? (<Image style={Styles.brandLogo} source={require('../../../assets/img/masterCard.png')} >
                        </Image>) : null}
                        {brand == 'AmericanExpress' ? (<Image style={Styles.brandLogo} source={require('../../../assets/img/americanExpress.png')} >
                        </Image>) : null}
                    </View>
                    <View style={Styles.numberCont}>
                        <Text style={Styles.number}>
                            Terminado en {splitedNumber}
                        </Text>

                    </View>
                </View>
            </Pressable>
            <Modal animationType='slide' visible={Visible}>
                <ModalCard setVisible={setVisible} data={{ brand, number, owner, expiryDate, securityCode }}></ModalCard>
            </Modal>

        </View>

    )
}

const Styles = StyleSheet.create({
    CardCont: {
        marginLeft: 30,
        borderRadius: 10,
        backgroundColor: '#3CB4E6',
        width: 250,
        height: 70,
        padding: 10,
        flexDirection: 'row',

    },
    number: {
        marginLeft: 50,
        fontSize: 20,
        color: 'white'
    },
    brandLogo: {
        width: 30,
        height: 30
    },
    logoCont: {
        width: 20,
        height: 20
    },
    logoNumber: {
        justifyContent: 'center'
    },

})
export default Card