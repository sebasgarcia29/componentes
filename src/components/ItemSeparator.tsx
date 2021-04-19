import React from 'react';
import { StyleSheet, View } from 'react-native';

export const ItemSeparator = () => {
  return (
    <View style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    opacity: 0.4,
    marginVertical: 5,
  },
});
