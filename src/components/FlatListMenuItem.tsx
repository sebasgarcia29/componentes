/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MenuItem } from '../interfaces/appInterfaces';


interface Props {
  menuItem: MenuItem,
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={(() => navigation.navigate(menuItem.components))}
      activeOpacity={0.1}
    >
      <View style={styles.container} >
        <Icon name={menuItem.icon} size={23} color="blue" />
        <Text style={styles.itemText}>{menuItem.name}  </Text>
        <View style={{ flex: 1 }} />
        <Icon name="chevron-right" size={23} color="#2B9EED" />
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
