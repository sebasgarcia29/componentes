/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {

  const { top } = useSafeAreaInsets();

  const [refreshing, setrefreshing] = useState(false);

  const [data, setdata] = useState<string>();

  const { theme: { colors: { primary } } } = useContext(ThemeContext);


  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      console.log('se acabo');
      setrefreshing(false,);
      setdata('Hole jejeje');
    }, 3500);
  };

  return (
    <ScrollView
      style={{ marginBottom: refreshing ? top : 0 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={150}
          progressBackgroundColor={'#f84e1e'}
          colors={['white', 'red', 'orange']}
          style={{ backgroundColor: primary }}
          tintColor={'white'}
          title={'Refreshing'}
          titleColor={'white'}
        />
      }
    >
      <View style={styles.globalMargin}>
        <Header title={'PullToRefreshScreen'} />

        {data && (
          <Header title={data} />
        )}

      </View>
    </ScrollView>
  );
};
