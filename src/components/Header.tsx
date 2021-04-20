/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

interface Props {
  title: string
}


export const Header = ({ title = 'default' }: Props) => {

  const { top } = useSafeAreaInsets();

  const { theme: { colors: { text } } } = useContext(ThemeContext);


  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }} >
      <Text style={{...styles.title, color: text}}> {title} </Text>
    </View>
  );
};
