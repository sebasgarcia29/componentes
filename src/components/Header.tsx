/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

interface Props {
  title: string
  color?: string;
}


export const Header = ({ title = 'default', color = '#f84e1e' }: Props) => {

  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }} >
      <Text style={{...styles.title, color}}> {title} </Text>
    </View>
  );
};
