import { Theme } from '@react-navigation/native';

type ThemeAction =
  | { type: 'set_light_theme' }
  | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
  currenTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTeam: ThemeState = {
  currenTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#2f1c64',
    background: 'white',
    card: '#f84e1e',
    text: 'black',
    border: 'orange',
    notification: 'teal',
  },
};

export const darktTeam: ThemeState = {
  currenTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#f84e1e',
    background: 'black',
    card: '#f84e1e',
    text: 'white',
    border: 'orange',
    notification: 'teal',
  },
};


export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return { ...lightTeam };
    case 'set_dark_theme':
      return { ...darktTeam };
    default:
      return state;
  }
};
