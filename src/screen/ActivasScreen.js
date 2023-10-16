import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { Button, List, TextInput } from 'react-native-paper';
import Modal from 'react-native-modal'; // Importa el componente Modal
import { globalStyles } from '../styles/index';
//import { ScrollView } from 'react-native-web';

export default function ActivasScreen() {
  const [isModalVisible1, setModalVisible1] = useState(false); // Estado para la primera modal
  const [isModalVisible2, setModalVisible2] = useState(false); // Estado para la segunda modal
  const [isModalVisible3, setModalVisible3] = useState(false); // Estado para la segunda modal
  const [isModalVisible4, setModalVisible4] = useState(false); // Estado para la segunda modal
  const [isModalVisible5, setModalVisible5] = useState(false); // Estado para la segunda modal
  const [isModalVisible6, setModalVisible6] = useState(false); // Estado para la segunda modal
  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1); // Cambia el estado de la primera modal
  };
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2); // Cambia el estado de la segunda modal
  };
  const toggleModal3 = () => {
    setModalVisible3(!isModalVisible3); // Cambia el estado de la tercera modal
  };
  const toggleModal4 = () => {
    setModalVisible4(!isModalVisible4); // Cambia el estado de la tercera modal
  };
  const toggleModal5 = () => {
    setModalVisible5(!isModalVisible5); // Cambia el estado de la tercera modal
  };
  const toggleModal6 = () => {
    setModalVisible6(!isModalVisible6); // Cambia el estado de la tercera modal
  };
  const [visible, setVisible] = useState(false);
  const servicio = () => {
    setVisible((prevVisible) => !prevVisible);
  }
  const [visible1, setVisible1] = useState(false);
  const servicio1 = () => {
    setVisible1((prevVisible) => !prevVisible);
  }
  const [visible2, setVisible2] = useState(false);
  const servicio2 = () => {
    setVisible1((prevVisible) => !prevVisible);
  }


  return (
    <ImageBackground
      source={require('../../assets/fondo.png')} // Ruta de la imagen de fondo
      style={globalStyles.backgrounds}
    >
      <View style={globalStyles.containers}>

        <View style={globalStyles.topBars}>

          <Text style={globalStyles.titleys}>App Técnico</Text>
          <Image
            source={require('../../assets/icons/logo.png')} style={globalStyles.icons} />
        </View >


        <View style={globalStyles.view1s}>
          <TouchableOpacity onPress={servicio} style={globalStyles.opa1s}>

            <Text>Servicio Urgente</Text>
          </TouchableOpacity>
          <Text>|</Text>
          <TouchableOpacity onPress={servicio} style={globalStyles.opa1s}>
            <Text>Servicio Programado</Text>
          </TouchableOpacity>
          <Text>|</Text>
          <TouchableOpacity onPress={servicio} style={globalStyles.opa1s}>
            <Text>Servicio Reprogramado</Text>
          </TouchableOpacity>
        </View>

        {visible ? (
          <View style={styles.list}>
            <List.AccordionGroup>
              <List.Accordion title="Sevicio reprogramado en proceso" id="1">
                <TouchableOpacity onPress={toggleModal1}>
                  <List.Item style={globalStyles.dds} title="Detalle del servicio" />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal2}>
                  <List.Item style={globalStyles.dds} title="Segumiento" />
                </TouchableOpacity>
              </List.Accordion>
            </List.AccordionGroup>
          </View>
        ) : null}
        {visible1 ? (
          <View style={styles.list}>
            <List.AccordionGroup>
              <List.Accordion title="Sevicio programado en proces2o" id="1">
                <TouchableOpacity onPress={toggleModal1}>
                  <List.Item style={globalStyles.dds} title="Detalle del servicio" />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal2}>
                  <List.Item style={globalStyles.dds} title="Segumiento" />
                </TouchableOpacity>
              </List.Accordion>
            </List.AccordionGroup>
          </View>
        ) : null}
        {visible2 ? (
          <View style={styles.list}>
            <List.AccordionGroup>
              <List.Accordion title="Sevicio programado en proce3so" id="1">
                <TouchableOpacity onPress={toggleModal1}>
                  <List.Item style={globalStyles.dds} title="Detalle del servicio" />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal2}>
                  <List.Item style={globalStyles.dds} title="Segumiento" />
                </TouchableOpacity>
              </List.Accordion>
            </List.AccordionGroup>
          </View>
        ) : null}
        {/* Modal 1 */}
        <Modal isVisible={isModalVisible1}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Detalle del servicio</Text>
              <TouchableOpacity onPress={toggleModal1}>
                <Text style={styles.closeModalButton}>Cerrar</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>

        {/* Modal 2 */}
        <Modal isVisible={isModalVisible2}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Seguimiento</Text>
              <TouchableOpacity style={styles.button} onPress={toggleModal3}>
                <Image
                  source={require('../../assets/icons/user2Icon.png')} style={globalStyles.icon1ay} />
                <Text style={styles.buttonText}>Técnico en camino</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleModal6}>
                <Image
                  source={require('../../assets/icons/apsIcon.png')} style={globalStyles.icon1ay} />
                <Text style={styles.buttonText}>Agregar Productos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleModal4}>
                <Image
                  source={require('../../assets/icons/siIcon.png')} style={globalStyles.icon1ay} />
                <Text style={styles.buttonText}>Servicio Iniciado</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleModal5}>
                <Image
                  source={require('../../assets/icons/spIcon.png')} style={globalStyles.icon1asy} />
                <Text style={styles.buttonText}>Sevicio pausado</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={toggleModal2}>
                <Text style={styles.closeModalButton}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Modal 1 */}
        <Modal isVisible={isModalVisible1}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Detalle del servicio</Text>
              <TouchableOpacity onPress={toggleModal1}>
                <Text style={styles.closeModalButton}>Cerrar</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>

        {/* Modal 2 */}
        <Modal isVisible={isModalVisible2}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Seguimiento</Text>
              <TouchableOpacity style={styles.button} onPress={toggleModal3}>
                <Image
                  source={require('../../assets/icons/user2Icon.png')} style={globalStyles.icon1ay} />
                <Text style={styles.buttonText}>Técnico en camino</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleModal6}>
                <Image
                  source={require('../../assets/icons/apsIcon.png')} style={globalStyles.icon1ay} />
                <Text style={styles.buttonText}>Agregar Productos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleModal4}>
                <Image
                  source={require('../../assets/icons/siIcon.png')} style={globalStyles.icon1ay} />
                <Text style={styles.buttonText}>Servicio Iniciado</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleModal5}>
                <Image
                  source={require('../../assets/icons/spIcon.png')} style={globalStyles.icon1asy} />
                <Text style={styles.buttonText}>Sevicio pausado</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={toggleModal2}>
                <Text style={styles.closeModalButton}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Modal 3 */}
        <Modal isVisible={isModalVisible3}>
          <View style={styles.modalContainer1}>
            <View style={styles.modalContent1}>
              <Text style={styles.modalTitle1}>Técnico en camino</Text>
              <View style={styles.hola}>
                <TouchableOpacity style={styles.button1} onPress={toggleModal3}>
                  <Text style={styles.buttonText1}>Confirmar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={toggleModal3}>
                  <Text style={styles.buttonText1}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* Modal 4 */}
        <Modal isVisible={isModalVisible4}>
          <View style={styles.modalContainer1}>
            <View style={styles.modalContent1}>
              <Text style={styles.modalTitle1}>Servicio Iniciado</Text>
              <View style={styles.hola}>
                <TouchableOpacity style={styles.button1} onPress={toggleModal4}>
                  <Text style={styles.buttonText1}>Confirmar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={toggleModal4}>
                  <Text style={styles.buttonText1}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* Modal 5 */}
        <Modal isVisible={isModalVisible5}>
          <View style={styles.modalContainer1}>
            <View style={styles.modalContent1}>
              <Text style={styles.modalTitle1}>Servicio Pausado </Text>
              <View style={styles.hola}>
                <TouchableOpacity style={styles.button1} onPress={toggleModal5}>
                  <Text style={styles.buttonText1}>Confirmar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={toggleModal5}>
                  <Text style={styles.buttonText1}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* Modal 6 */}
        <Modal isVisible={isModalVisible6}>
          <View style={globalStyles.modalContainers}>
            <View style={globalStyles.modalContents}>
              <View style={globalStyles.containerTitle}>
                <Text style={globalStyles.dstext}>Agregar producto/ servicio</Text>
              </View>

              <View style={globalStyles.iconoss}>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/noIcon.png')} style={globalStyles.icon1ay} />
                  <Text>Número de orden:</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/selepIcon.png')} style={globalStyles.icon1ay} />
                  <Text>Seleccionar Producto:</Text>
                </TouchableOpacity>
                <View style={globalStyles.lists1}>
                  <List.AccordionGroup>
                    <List.Accordion title="Seleccionar producto..." id="1">
                      <TouchableOpacity >
                        <List.Item style={globalStyles.dds} title="Mouse" />
                      </TouchableOpacity>
                      <TouchableOpacity >
                        <List.Item style={globalStyles.dds} title="Mouse" />
                      </TouchableOpacity>
                    </List.Accordion>
                  </List.AccordionGroup>
                </View>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/producIcon.png')} style={globalStyles.icon1ay} />
                  <Text>Producto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/precioIcon.png')} style={globalStyles.icon1ay} />
                  <Text>Precio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/subtotalIcon.png')} style={globalStyles.icon1ay} />
                  <Text>Subtotal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/tipopagoIcon.png')} style={globalStyles.icon1ay} />
                  <Text>Tipo de pago</Text>
                </TouchableOpacity>
                <View style={globalStyles.lists1}>
                  <List.AccordionGroup>
                    <List.Accordion title="Tipo de pago..." id="1">
                      <TouchableOpacity >
                        <List.Item style={globalStyles.dds} title="Mouse" />
                      </TouchableOpacity>
                      <TouchableOpacity >
                        <List.Item style={globalStyles.dds} title="Mouse" />
                      </TouchableOpacity>
                    </List.Accordion>
                  </List.AccordionGroup>
                  <TouchableOpacity style={globalStyles.opa1sm}>
                    <Text>Motivo</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={globalStyles.opa2m}>
                  <TextInput
                    style={styles.input}
                  />
                </TouchableOpacity>


                <TouchableOpacity onPress={toggleModal6}>
                  <Button style={globalStyles.closeModalButtons}>Cerrar</Button>
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </Modal>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    backgroundColor: 'ffffff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "ffffff",
  },
  modalContent1: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '70%',
    alignItems: 'center',
  },
  modalContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "ffffff",
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  modalTitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#236DB6"
  },
  closeModalButton: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#1BA1E2',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  backButton: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  menuButton: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  sigButton: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 3,
    position: "relative", // Ajusta la imagen de fondo al tamaño de la pantalla
  },
  button: {
    backgroundColor: '#00284D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: 200, // Ancho personalizado
    flexDirection: "row",
    alignItems: "center",

  },
  button1: {
    backgroundColor: '#236DB6',
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 10,
    width: 80, // Ancho personalizado
    height: 30,
    margin: 10,
  },
  button2: {
    backgroundColor: '#236DB6',
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 10,
    width: 190, // Ancho personalizado
    left: "20%",
    height: 30,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText1: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText2: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hola: {
    flexDirection: 'row',  // Alinea los elementos en una fila
    justifyContent: 'center',  // Alinea los elementos horizontalmente en el centro
  },
  input: {
    borderColor: 'white',
    borderRadius: 5,
    padding: 1,
    width: '100%',
    marginBottom: 10,
  },

});


