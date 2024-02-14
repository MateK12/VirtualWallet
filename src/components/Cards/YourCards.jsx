import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Card from './Card';
import GlobalStyles from '../../styles';
const YourCards = () => {
  const [Cards, setCards] = useState([])

  useEffect(() => {
    setCards([{ number: '3636898975751212', brand: 'Visa', owner: 'Mateo Kristich', securityCode: '111', expiryDate: '12/27' },
    { number: '1717929284849090', brand: 'MasterCard', owner: 'Mateo Kristich', securityCode: '111', expiryDate: '4/24' },
    { number: '6464272794948383', brand: 'AmericanExpress', owner: 'Mateo Kristich', securityCode: '111', expiryDate: '9/26' }])
  }, [])
  return (
    <Swiper style={[Styles.TotalCont]} loop={false} >

      {Cards.map((e) => (
        <View style>
          <Card number={e.number}
            brand={e.brand}
            owner={e.owner}
            securityCode={e.securityCode}
            expiryDate={e.expiryDate} />
        </View>
      ))}


    </Swiper>
  )
}
const Styles = StyleSheet.create({
  cont: {
    width: 200,
    height: 200,
    backgroundColor: 'red',


  },
  TotalCont: {
    height: 120,
    width: 'fit-content'
  }
})
export default YourCards