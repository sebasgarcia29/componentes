import 'react-native-gesture-handler';
import * as React from 'react';
// import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     // primary: '#f84e1e',
//     // background: 'string',
//     // card: 'string',
//     // text: 'string',
//     // border: 'string',
//     // notification: 'string',
//   },
// };

const App = () => {
  return (
    <AppState>
        <StackNavigator />
    </AppState>
  );
};

const AppState = ({ children }: { children: JSX.Element }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default App;

