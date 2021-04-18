/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animated101Screen = () => {

  const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.purpleBox,
        marginBottom: 20,
        opacity,
        transform: [{
          translateY: position,
        }],
      }} />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(-350, 300);
        }}
      />
      <Button
        title="FadeOut"
        onPress={fadeOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#6638f0',
    width: 150,
    height: 150,
  },
});
