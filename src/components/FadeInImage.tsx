/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>
}

export const FadeInImage = ({ uri, style }: Props) => {

  const { opacity, fadeIn } = useAnimation();

  const [isLoading, setisLoading] = useState(true);

  const finisLoading = () => {
    setisLoading(false);
    fadeIn();
  };


  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator size={40} color={'#f84e1e'} style={{ position: 'absolute' }} />
      )}

      <Animated.Image
        source={{ uri }}
        onLoadEnd={finisLoading}
        style={{
          ...style as any,
          opacity,
        }}
      />
    </View>

  );
};
