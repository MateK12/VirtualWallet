import React from 'react'
import { View, Button, StyleSheet, Text, StatusBar, Image, TouchableOpacity, TextInput } from "react-native";
import GlobalStyles from '../../styles';
import LinearGradient from 'react-native-linear-gradient';

const ModalCard = ({ setVisible, data }) => {

  return (
    <View>
      <StatusBar></StatusBar>
      <View style={styles.btnCancel}>
        <Button
          title="Cancelar"
          color='#d63d39'
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ color: 'white', marginHorizontal: 20 }}
          onPress={() => { setVisible(false) }}
        />
      </View>
      <View style={[styles.CardCont]}>
        <View style={[styles.CardData, GlobalStyles.primaryColor, GlobalStyles.elevation]}>
          <View style={styles.dataColor}>

            <View>
              {data.brand == 'Visa' ? (<Image style={styles.brandLogo} source={require('../../../assets/img/visa.png')} >
              </Image>) : null}
              {data.brand == 'MasterCard' ? (<Image style={styles.brandLogo} source={require('../../../assets/img/masterCard.png')} >
              </Image>) : null}
              {data.brand == 'AmericanExpress' ? (<Image style={styles.brandLogo} source={require('../../../assets/img/americanExpress.png')} >
              </Image>) : null}
            </View>
            <View style={styles.numberCont}>
              <Text style={styles.txtNumber}>
                {data.number}
              </Text>
              <TouchableOpacity>
                <Image style={styles.copy} source={require('../../../assets/img/copia.png')}></Image>
              </TouchableOpacity>
            </View>
            <Text style={styles.owner}>
              {data.owner}
            </Text>
            <View style={styles.CVVandDate}>
              <Text>
                CVV: <Text style={styles.cvv}>
                  {data.securityCode}
                </Text>
              </Text>
              <Text>
                Valido hasta: <Text style={styles.cvv}>
                  {data.expiryDate}
                </Text>

              </Text>
            </View>
            <View>
            </View>
          </View>

        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  btnCancel: {
    padding: 40
  },
  CardData: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    padding: 30,
  },
  CardCont: {
    paddingLeft: 40,
    paddingRight: 40
  },
  dataColor: {
    color: '#FFF'
  },
  txtNumber: {
    fontSize: 25,
    marginVertical: 15

  },
  CVVandDate: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  owner: {
    fontSize: 20,
    marginBottom: 10,
    fontStyle: 'italic',
    fontWeight: '500'
  },
  cvv: {
    fontSize: 15,
    fontWeight: '500',
  },
  brandLogo: {
    width: 30,
    height: 30
  },
  numberCont: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  copy: {
    height: 20,
    width: 20
  }
})
export default ModalCard