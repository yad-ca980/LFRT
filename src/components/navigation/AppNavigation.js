import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigation from '../TabNavigation/TabNavigation'
import { View, StyleSheet, Text, ImageBackground, TextInput } from 'react-native';


export default function AppNavigation() {
  const Stack = createNativeStackNavigator()
  return (
    <ImageBackground
      source={require('../../../assets/fondo.png')}//imagen de fondo 
      style={styles.background}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='TabNavigation'
            component={TabNavigation}
            options={{
              headerShown: false
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta la imagen para que cubra todo el fondo
  },
})