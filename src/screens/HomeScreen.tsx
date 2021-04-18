/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { Header } from '../components/Header';


export const HomeScreen = () => {

  const itemSeparator = () => {
    return (
      <View style={{ borderWidth: 2, opacity: 0.4, marginVertical: 5 }} />
    );
  };


  return (
    <View style={{ ...styles.container, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<Header title={'Opciones de Menú'} color="#0e3c79" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
