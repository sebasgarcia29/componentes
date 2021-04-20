/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {
  View,
  SectionList,
  Text,
} from 'react-native';
import { Header } from '../components/Header';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { casas } from '../data/dataSectionList';
import { styles } from '../theme/appTheme';

export const SectionListScreen = () => {

  const { theme: { colors: { primary, background } } } = useContext(ThemeContext);


  return (
    <View style={{ ...styles.globalMargin, flex: 1, backgroundColor: background }}>
      {/* <Header title={'Section List'} /> */}

      <SectionList
        sections={casas}
        renderItem={({ item }) => <Text style={{color: primary}}> {item} </Text>}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { casa } }) => (
          <View style={{ backgroundColor: background }}>
            <Header title={casa} />
          </View>
        )}
        stickySectionHeadersEnabled
        ListHeaderComponent={<Header title={'Section List'} />}
        ListFooterComponent={() => (
          <View style={{ marginBottom: 70, backgroundColor: background }}>
            <Header title={'Total: ' + casas.length} />
          </View>
        )}
        renderSectionFooter={({ section }) => (
          <View style={{ backgroundColor: background }}>
            <Header title={'Total ' + section.data.length} />
          </View>
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
      // SectionSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
