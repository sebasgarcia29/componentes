/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animated101Screen } from '../screens/Animated101Screen';
import { Animated102Screen } from '../screens/Animated102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { ThemeContext } from '../context/themeContext/ThemeContext';



const Stack = createStackNavigator();

export const StackNavigator = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          // cardStyle: { backgroundColor: theme.colors.background },
        }}>
          <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Animated101Screen" component={Animated101Screen} />
          <Stack.Screen name="Animated102Screen" component={Animated102Screen} />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
          <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
          <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  );
};
