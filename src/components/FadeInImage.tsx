/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ActivityIndicator, Animated, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
}

export const FadeInImage = ({ uri }: Props) => {

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
          width: '100%',
          height: 400,
          opacity,
        }}
      />
    </View>

  );
};
