/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { Header } from '../components/Header';

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

  return (
    <View style={{ marginHorizontal: 20 }}>
      <Header title={'Switches'} />

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>IsActive</Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')}/>
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
      </View>

      <Text style={styles.switchText}>
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
