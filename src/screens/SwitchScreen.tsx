/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { Header } from '../components/Header';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {

  const [state, setstate] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const onChange = (value: boolean, field: keyof typeof state ) => {
    setstate({
      ...state,
      [field]: value,
    });
  };

  const { isActive, isHungry, isHappy } = state;

  const { theme: { colors: { text } } } = useContext(ThemeContext);


  return (
    <View style={{ marginHorizontal: 20 }}>
      <Header title={'Switches'} />

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: text}}>IsActive</Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: text}}>isHungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')}/>
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: text}}>isHappy</Text>
        <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
      </View>

      <Text style={{...styles.switchText, color: text}}>
        {JSON.stringify(state, null, 3)}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  switchText: {
    fontSize: 25,
  },
});
