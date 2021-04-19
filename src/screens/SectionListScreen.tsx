/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  SectionList,
  Text,
} from 'react-native';
import { Header } from '../components/Header';
import { ItemSeparator } from '../components/ItemSeparator';
import { casas } from '../data/dataSectionList';
import { styles } from '../theme/appTheme';

export const SectionListScreen = () => {

  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      {/* <Header title={'Section List'} /> */}

      <SectionList
        sections={casas}
        renderItem={({ item }) => <Text> {item} </Text>}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { casa } }) => (
          <View style={{ backgroundColor: 'white' }}>
            <Header title={casa} color={'#2f1c64'} />
          </View>
        )}
        stickySectionHeadersEnabled
        ListHeaderComponent={<Header title={'Section List'} />}
        ListFooterComponent={() => (
          <View style={{ marginBottom: 70 }}>
            <Header title={'Total: ' + casas.length} />
          </View>
        )}
        renderSectionFooter={({ section }) => (
          <View style={{ backgroundColor: 'white' }}>
            <Header title={'Total ' + section.data.length} />
          </View>
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
      // SectionSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
