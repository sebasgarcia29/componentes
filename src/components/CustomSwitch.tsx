import React, { useContext, useState } from 'react';
import { Platform, Switch } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

  const [isEnabled, setIsEnabled] = useState(isOn);

  const { theme: { colors: { primary } } } = useContext(ThemeContext);


  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{ false: '#D9D9DB', true: primary }}
      thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      ios_backgroundColor={color.light_gray}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

const color = {
  blue: '#0e3c79',
  orange: '#da8943',
  light_gray: '#919fb6',
  white: 'white',
};
