/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Button,
  Modal,
  Text,
  StyleSheet,
} from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {


  const [showModal, setshowModal] = useState(false);

  const onShowModal = () => {
    setshowModal(!showModal);
  };

  return (
    <View style={styles.globalMargin}>
      <Header title="Modal" />
      <Button
        title={'Show Modal'}
        onPress={onShowModal}
      />

      <Modal
        animationType={'fade'}
        visible={showModal}
        transparent
      >
        <View style={stylesModal.containerModal}>
          <View style={stylesModal.bodyModal}>
            <Text style={stylesModal.titleModal}>
              Modal
              </Text>
            <Text style={stylesModal.textBodyModal}>
              Cuerpo del modal
              </Text>
            <Button
              title={'Hide Modal'}
              onPress={onShowModal}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const stylesModal = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyModal: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 5,
  },
  titleModal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  textBodyModal: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 20,
  },
});
