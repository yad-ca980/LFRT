import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Button, List } from 'react-native-paper';
import Modal from 'react-native-modal'; // Importa el componente Modal
import { globalStyles } from '../styles/index';

export default function AolicitudesScreen() {
  const [isModalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad de la modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible); // Cambia el estado de la modal
  };
  const [isModalVisible1, setModalVisible1] = useState(false); // Estado para controlar la visibilidad de la modal
  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1); // Cambia el estado de la modal
  };
  const [visible, setVisible] = useState(false);
  const mostrarServicio = () => {
    setVisible((prevVisible) => !prevVisible);
  }
  const [visible1, setVisible1] = useState(false);
  const mostrarServicio1 = () => {
    setVisible1((prevVisible) => !prevVisible);
  }

  return (
    <ImageBackground
      source={require('../../assets/fondo.png')}
      style={globalStyles.backgrounds}
    >
      <View style={globalStyles.containers}>

        <View style={globalStyles.topBars}>

          <Text style={globalStyles.titleys}>App Técnico</Text>
          <Image
            source={require('../../assets/icons/logo.png')} style={globalStyles.icons} />
        </View >
        <View style={globalStyles.view1s}>
          <TouchableOpacity onPress={mostrarServicio} style={globalStyles.opa1s}>
            <Image
              source={require('../../assets/icons/descargaIcon.png')} style={globalStyles.icon1s} />
            <Text>Servicio Disponible</Text>
          </TouchableOpacity>

          <Text>|</Text>

          <TouchableOpacity onPress={mostrarServicio1} style={globalStyles.opa1s}>
            <Image
              source={require('../../assets/icons/bocinaIcon.png')} style={globalStyles.icon1s} />
            <Text>Servicio Asignado</Text>
          </TouchableOpacity>
        </View>

        {visible ? (
          <View style={globalStyles.lists}>
            <List.AccordionGroup>
              <List.Accordion title="Servicio disponible" id="1">
                <TouchableOpacity onPress={toggleModal}>
                  <List.Item style={globalStyles.dds} title="Detalle del servicio" />
                </TouchableOpacity>
              </List.Accordion>
            </List.AccordionGroup>
          </View>
        ) : null}

        {visible1 ? (
          <View style={globalStyles.lists}>
            <List.AccordionGroup>
              <List.Accordion title="Major te asignó un servicio" id="1">
                <TouchableOpacity onPress={toggleModal1}>
                  <List.Item style={globalStyles.dds} title="Detalle del servicio" />
                </TouchableOpacity>
              </List.Accordion>
            </List.AccordionGroup>
          </View>
        ) : null}

        {/* Modal1 */}
        <Modal onPress={mostrarServicio} isVisible={isModalVisible}>
          <View style={globalStyles.modalContainers}>
            <View style={globalStyles.modalContents}>
              <View style={globalStyles.containerTitle}>
                <Text style={globalStyles.dstext}>Detalles del servicio</Text>
              </View>
              <View style={globalStyles.iconoss}>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/direccionIcon.png')} style={globalStyles.icon1sy} />
                  <Text>Dirección del servicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/celularIcon.png')} style={globalStyles.icon1sy} />
                  <Text>Teléfono</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/user1Icon.png')} style={globalStyles.icon1sy} />
                  <Text>Nombre del cliente</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/descriptionIcon.png')} style={globalStyles.icon1sy} />
                  <Text>Descrpcion del problema</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/statusIcon.png')} style={globalStyles.icon1sy} />
                  <Text>Status del servicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/indicationIcon.png')} style={globalStyles.icon1sy} />
                  <Text>Indicaciones para el técnico</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal}>
                  <Button style={globalStyles.closeModalButtons}>Cerrar</Button>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Modal2 */}
        <Modal onPress={mostrarServicio1} isVisible={isModalVisible1}>
          <View style={globalStyles.modalContainers}>
            <View style={globalStyles.modalContents}>
              <View style={globalStyles.containerTitle}>
                <Text style={globalStyles.dstext}>Detalles del servicio</Text>
              </View>
              <View style={globalStyles.iconoss}>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/direccionIcon.png')} style={globalStyles.icon1sy} />
                  <Text>Dirección del servicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/celularIcon.png')} style={globalStyles.icon1sy} />
                  <Text>Teléfono</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/user1Icon.png')} style={globalStyles.icon1sy} />
                  <Text>Nombre del cliente</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/descriptionIcon.png')} style={globalStyles.icon1sy} />
                  <Text>Descrpcion del problema</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/statusIcon.png')} style={globalStyles.icon1sy} />
                  <Text>Status del servicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.opa1sm}>
                  <Image
                    source={require('../../assets/icons/indicationIcon.png')} style={globalStyles.icon1sy} />
                  <Text>Indicaciones para el técnico</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal1}>
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


