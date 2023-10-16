import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ajusta la imagen al tamaño del componente
  },
  input: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente para los campos de entrada
  },
  buttonText: {
    marginTop: 10,
    backgroundColor: 'blue', // Cambia el color del botón según tus preferencias
  },
  // Agrega más estilos según sea necesario
});
