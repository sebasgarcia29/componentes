/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MenuItem } from '../interfaces/appInterfaces';
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props {
  menuItem: MenuItem,
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

  const navigation = useNavigation();

  const { theme: { colors: { text, primary } } } = useContext(ThemeContext);


  return (
    <TouchableOpacity
      onPress={(() => navigation.navigate(menuItem.components))}
      activeOpacity={0.1}
    >
      <View style={styles.container} >
        <Icon name={menuItem.icon} size={23} color={primary} />
        <Text style={{ ...styles.itemText, color: text }}>{menuItem.name}  </Text>
        <View style={{ flex: 1 }} />
        <Icon name="chevron-right" size={23} color={primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
