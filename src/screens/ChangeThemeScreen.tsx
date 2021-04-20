/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {


  const { setLightTheme, setDarkTheme, theme: { colors: { primary } } } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <Header title="Theme" />

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          style={{ ...stylesTheme.button, backgroundColor: primary }}
          activeOpacity={0.4}
          onPress={setLightTheme}
        >
          <Text style={stylesTheme.text}> Light </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...stylesTheme.button, backgroundColor: primary }}
          activeOpacity={0.4}
          onPress={setDarkTheme}
        >
          <Text style={stylesTheme.text}> Dark </Text>
        </TouchableOpacity>

      </View>



    </View>
  );
};

const stylesTheme = StyleSheet.create({
  button: {
    backgroundColor: '#f84e1e',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
});
