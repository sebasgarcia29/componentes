import React, { createContext, useEffect, useReducer } from 'react';
import { AppState, Appearance } from 'react-native';
import { themeReducer, ThemeState, lightTeam, darktTeam } from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

  // const colorScheme = useColorScheme();

  // Solucion de leer color en tiempo real IOS
  // useEffect(() => {
  //   colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  // }, [colorScheme]);

  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light' ? setLightTheme() : setDarkTheme();
      }
    });
  }, []);



  const [theme, dispatch] = useReducer(
    themeReducer,
    (Appearance.getColorScheme() === 'dark' ? darktTeam : lightTeam)
  ); // Leer el tema global

  const setDarkTheme = () => {
    dispatch({ type: 'set_dark_theme' });
  };
  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' });
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      setDarkTheme,
      setLightTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
