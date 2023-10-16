import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image, ImageBackground  } from 'react-native'
import React, { useState } from 'react'
//import Fonts from '../../constants/Fonts'
import LoginForm from '../../components/Auth/Login/LoginForm';


export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
 
  const changeForm = () => {
    setIsLogin(!isLogin);
  }

  return (
    <ImageBackground source={require("../../../assets/fondo.jpg")} style={styles.backgroundImage}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <Image source={require("../../../assets/logo.png")} style={styles.imag } />
        {isLogin ? <LoginForm /> : <RegisterForm />}
       
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ajusta la imagen para cubrir toda la pantalla
  },
  imag:{
    width: 150, 
    height: 150,
    marginBottom:30
  }
});
