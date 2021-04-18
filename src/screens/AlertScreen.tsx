import React from 'react';
import { Alert, Button, Platform, View } from 'react-native';

import prompt from 'react-native-prompt-android';

import { Header } from '../components/Header';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

  const showAlert = () => {
    Alert.alert('Titulo', 'Subtitulo',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'destructive' },
        { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'default' },
      ]
      // , { cancelable: true, onDismiss: () => console.log('onDismiss') }
    );
  };

  const showPromptIos = () => {
    Alert.prompt('¿Esta seguro?', 'Esta accion no se puede revertir',
      (value: string) => console.log('valor', value),
      'plain-text',
      'Text por default',
      'email-address'
    );
  };

  const showPromptAndroid = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
      ],
      {
          type: 'secure-text',
          cancelable: false,
          defaultValue: 'test',
          placeholder: 'placeholder',
      }
    );
  };


  return (
    <View style={styles.globalMargin}>
      <Header title="Alertas" />

      <Button
        title="Mostrar alerta"
        onPress={showAlert}
      />

      {Platform.OS === 'ios' ?
        (
          <Button
            title="Mostrar prompt IOS"
            onPress={showPromptIos}
          />
        )
        :
        (
          <Button
            title="Mostrar prompt Android"
            onPress={showPromptAndroid}
          />
        )
      }

    </View>
  );
};
