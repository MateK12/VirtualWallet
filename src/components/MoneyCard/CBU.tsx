import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Button } from 'react-native';
import GlobalStyles from '../../styles';
import { Divider } from 'react-native-paper';


type CBUprops = { //define a type with the name of props
    Money: number, //name each prop
    userInfo: {
        cbu: number,
        name: string,
        alias: string
    },
    setCBUvisibilty: Function
}
const CBU = (prop: CBUprops) => { //indicate the type of the prop
    const { cbu, name, alias } = prop.userInfo //deconstruct them
    return (
        <View style={styles.cont}>
            <View style={styles.btnCancel}>
                <Button title='cancelar' color={'#d63d39'} onPress={() => { prop.setCBUvisibilty(false) }}></Button>
            </View>
            <View style={[GlobalStyles.elevation, styles.dataCont]}>
                <Text>CBU</Text>
                <Text>{cbu}</Text>
                <Divider style={styles.divider} bold={true}></Divider>
                <Text>Alias</Text>
                <Text>{alias}</Text>
                <Divider style={styles.divider} bold={true}></Divider>
                <Text>Nombre</Text>
                <Text>{name}</Text>
                <Divider style={styles.divider} bold={true}></Divider>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cont: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,

    },
    divider: {
        height: 3,
        marginVertical: 10
    },
    dataCont: {
        backgroundColor: '#f2f2f2',
        width: 350,
        padding: 10

    },
    btnCancel: {
        width: '100%',
        marginBottom: 30
    }

})
export default CBU