/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import { } from 'react-native-gesture-handler';
import { CustomSwitch } from '../components/CustomSwitch';
import { Header } from '../components/Header';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

  const initialState = { name: '', email: '', phone: '', isSubscribed: false };

  const { onChange, form, isSubscribed } = useForm(initialState);

  const { theme: { colors: { text, primary } } } = useContext(ThemeContext);


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={styles.globalMargin}>
            <Header title={'TextInput'} />
            <TextInput
              style={{ ...stylesInput.input, borderColor: primary, borderWidth: 2, color: text }}
              onChangeText={(value) => onChange(value, 'name')}
              placeholder={'Nombre'}
              autoCorrect={false}
              autoCapitalize={'words'}
              keyboardType={'default'}
              placeholderTextColor={text}
            />
            <TextInput
              style={{ ...stylesInput.input, borderColor: primary, borderWidth: 2, color: text }}
              onChangeText={(value) => onChange(value, 'email')}
              placeholder={'email'}
              autoCorrect={false}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              keyboardAppearance={'dark'}
              placeholderTextColor={text}
            />

            <Text style={{...stylesInput.switchText, color: text}}>{JSON.stringify(form, null, 3)}</Text>


            <TextInput
              style={{ ...stylesInput.input, borderColor: primary, borderWidth: 2, color: text }}
              onChangeText={(value) => onChange(value, 'phone')}
              placeholder={'Telefono'}
              autoCorrect={false}
              keyboardType={'numeric'}
              placeholderTextColor={text}
            />

            <View style={stylesInput.switchRow}>
              <Text style={{...stylesInput.switchText, color: primary}}>Suscribirse</Text>
              <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
            </View>

            <View style={{ height: 100 }} />
          </View>

        </TouchableWithoutFeedback>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesInput = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.5)',
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  switchText: {
    fontSize: 25,
  },
});

