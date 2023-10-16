import { View, Text, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './LoginForm.styles';
import { globalStyles } from '../../../styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextInput, Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';

export default function LoginForm(props) {

  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Ingresa un correo válido').required('El correo es obligatorio'),
      password: Yup.string().required('La contraseña es obligatoria').min(6, 'La contraseña debe tener al menos 6 caracteres')
    }),
    onSubmit: async () => {

      setLoading(true);
      try {

      } catch (error) {

        console.log('Error en el inicio de sesión', error);
        Toast.show({
          text1: "Inicio de sesión fallido",
          text2: "Verifica tus credenciales",
          type: "error",

        })
      } finally {
        setLoading(false);
      }
    },
  });

  return (

    <View>
      <Text style={globalStyles.text}>Correo electrónico</Text>
      <TextInput
        style={globalStyles.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue('email', text)}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Text style={globalStyles.text}>Contraseña</Text>
      <TextInput

        style={globalStyles.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue('password', text)}
        value={formik.values.password}
        error={formik.errors.password}
      />

      <Button
        mode="contained"
        style={globalStyles.buttonText}
        onPress={formik.handleSubmit}
        loading={loading}>
        Iniciar sesión
      </Button>
    </View>
  );
}