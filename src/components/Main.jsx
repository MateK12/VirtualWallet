import React from 'react'
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import MoneyCard from './MoneyCard/MoneyCard';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import GlobalStyles from '../styles';
import YourCards from './Cards/YourCards';
import DrawerSections from './DrawerSections/DrawerSections';


DrawerSections
const Main = ({ navigation }) => {
    const GoAddCard = () => {
        navigation.navigate('AddCard')
    }
    return (

        <View style={styles.cont}>
            <ScrollView style={styles.Sview}>
                <View styles={styles.moneyCardCont}>
                    <MoneyCard navigation={navigation}></MoneyCard>
                </View>
                <View style={styles.btnGroupCont}>
                    <ButtonGroup></ButtonGroup>
                </View>
                <View style={styles.myCardsCont}>
                    <Text style={styles.myCardTxt}>Mis tarjetas</Text>
                    <Pressable style={[styles.btnAdd, GlobalStyles.elevation, GlobalStyles.primaryColor]} onPress={() => { GoAddCard() }}>
                        <Text style={styles.txtBtnAdd}>Agregar</Text>
                    </Pressable>
                </View>

                <View style={styles.cardsCont}>
                    <YourCards></YourCards>
                </View>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    cont: {
        alignItems: 'center',
        marginTop: 20,
        fontFamily: 'Manrope',
        color: '#808080',
    },
    Sview: {
        height: 'fit-content'
    },
    btnGroupCont: {
        marginTop: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    moneyCardCont: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    cardsCont: {
        width: 300,
    },
    myCardsCont: {
        flexDirection: 'row',
        marginBottom: 20
    },
    btnAdd: {
        width: '30%',
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: 'white',
    },
    myCardTxt: {
        fontSize: 25,
        marginRight: 20
    },
    txtBtnAdd: {
        color: 'white',
        fontSize: 15
    }

})
export default Main