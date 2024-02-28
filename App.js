<script src="http://localhost:8097"></script>

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Main from './src/components/Main';
import Transfer from './src/components/Transfer/Transfer';
import DrawerSections from './src/components/DrawerSections/DrawerSections';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddCard from './src/components/AddCard/AddCard';
import GlobalStyles from './src/styles';
import Login from './src/components/Login/Login';
import Identification from './src/components/Validations/Identification';
import VideoValidator from './src/components/VideoValidator/VideoValidator';
import Biometrics from './src/components/Biometrics/Biometrics';
export default function App() {

  const Stack = createStackNavigator();

  const [loaded] = useFonts({
    Manrope: require('./assets/fonts/Manrope-Regular.ttf')
  })
  // <View style={styles.logo} >
  //             <Image style={styles.img} source={require('./assets/img/logoRM.jpg')}></Image>
  //           </View>
  if (!loaded) {
    return null
  }

  return (
    <SafeAreaProvider>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Biometrics'
          screenOptions={{
            title: null,
            headerStyle: {
              backgroundColor: 'white',
              height: 100,

            },
            headerTintColor: '#111',
            headerTitleStyle: {
              fontSize: 30,
            },
            headerTitleAlign: 'center'


          }}
        >
          <Stack.Screen options={{ headerLeft: null }} name='Main' component={Main}></Stack.Screen>
          <Stack.Screen name='Transfer' component={Transfer}></Stack.Screen>
          <Stack.Screen name='AddCard' component={AddCard}></Stack.Screen>
          <Stack.Screen name='LogIn' component={Login}></Stack.Screen>
          <Stack.Screen name='IDvalidation' component={Identification}></Stack.Screen>
          <Stack.Screen name='VideoValidator' component={VideoValidator}></Stack.Screen>
          <Stack.Screen name='Biometrics' component={Biometrics}></Stack.Screen>


        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>


  );

}

const styles = StyleSheet.create({
  logo: {

    position: 'relative',
    left: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 120,
    height: 90
  }

});
