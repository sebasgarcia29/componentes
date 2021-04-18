import React, { useRef } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';

export const Animated102Screen = () => {

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [null, { dx: pan.x, dy: pan.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan,
        {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        // style={{ ...styles.redBox, transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
        style={[pan.getLayout(), styles.redBox]}
        {...panResponder.panHandlers}
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
  redBox: {
    backgroundColor: '#f84e1e',
    width: 150,
    height: 150,
  },
});
