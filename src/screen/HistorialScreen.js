import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/index'

export default function HistorialScreen() {
  return (
    <ImageBackground
      source={require('../../assets/fondo.png')}
      style={globalStyles.backgrounds}
    >
      <View style={globalStyles.containers}>
        <View style={globalStyles.topBars}>
          <Text style={globalStyles.titleys}>App Técnico</Text>
          <ImageBackground
            source={require('../../assets/icons/logo.png')} style={globalStyles.icons} />
        </View>

        <View style={styles.container}>

          <TouchableOpacity style={styles.opa1s}>
            <Text >Numero de orden</Text>
            <Text >LFR-9-79-23-09-28-122</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.opa1s}>
            <Text >Numero de orden</Text>
            <Text >LFR-9-79-23-09-28-123</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.opa1s}>
            <Text >Numero de orden</Text>
            <Text >LFR-9-79-23-09-28-124</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opa1s}>
            <Text >Numero de orden</Text>
            <Text >LFR-9-79-23-09-28-125</Text>
          </TouchableOpacity>
          <View >
            <Text >Numero de orden</Text>
            <Text >LFR-9-79-23-09-28-123</Text>
          </View>

        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
    height: '100%',
  },
  opa1s: {
    backgroundColor: '#ffffff',
    marginTop: 20,
  },
  text: {
    fontSize: 60,
    marginTop: 20,
  },

})
