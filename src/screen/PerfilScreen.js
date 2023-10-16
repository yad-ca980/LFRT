import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TextInput } from 'react-native'; // Importa ImageBackground desde 'react-native'
import { Avatar, Button } from 'react-native-paper';
//import { useFormik } from 'formik';

export default function PerfilScreen() {
  return (
    <ImageBackground
      source={require('../../assets/fondo.png')}//imagen de fondo 
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.containerItems}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.text1}>Perfil</Text>
            <Avatar.Image size={100} source={require('../../assets/perfil.jpeg')} />
          </View>

          <Text style={styles.text}>Nombre</Text>
          <View style={styles.containerNombre}>
            <Text>Yadira Campos Aguilar</Text>
          </View>
          <Text style={styles.text}>Correo</Text>
          <View style={styles.containerNombre}>
            <Text>yayis@gmail.com</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta la imagen para que cubra todo el fondo
  },
  container: {
    flex: 1, // Fondo transparente para que se muestre la imagen de fondo
    alignItems: "center", //
    justifyContent: "center"
  },
  containerItems: {

  },
  text: {
    marginTop: 10,
    fontSize: 17,
    color: '#ffffff',
  },
  text1: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 10
  },
  Button: {
    flex: 0,
    backgroundColor: '#ffffff',
    fontWeight: 'bold'
  },
  containerNombre: {
    backgroundColor: "white",
    padding: 10,
    width: 300,
    borderRadius: 10,
    marginVertical: 5
  }
});
