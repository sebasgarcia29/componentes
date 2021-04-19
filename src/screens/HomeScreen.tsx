import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { Header } from '../components/Header';
import { ItemSeparator } from '../components/ItemSeparator';


export const HomeScreen = () => {


  return (
    <View style={{ ...styles.container, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<Header title={'Opciones de Menú'} color="#0e3c79" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
