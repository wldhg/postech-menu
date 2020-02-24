import React, {
  createContext, useReducer, useContext, Dispatch,
} from 'react';
import { createTheme, Customizations } from 'office-ui-fabric-react';

const monetLight = createTheme({
  palette: {
    themePrimary: '#ffc206',
    themeLighterAlt: '#fffdf5',
    themeLighter: '#fff5d7',
    themeLight: '#ffecb4',
    themeTertiary: '#ffda69',
    themeSecondary: '#ffc823',
    themeDarkAlt: '#e6ad05',
    themeDark: '#c29204',
    themeDarker: '#8f6c03',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#b2b2b2',
    neutralSecondary: '#999999',
    neutralPrimaryAlt: '#808080',
    neutralPrimary: '#1b1b1b',
    neutralDark: '#4e4e4e',
    black: '#a5a5a5',
    white: '#fefefe',
  },
});

const monetDark = createTheme({
  palette: {
    themePrimary: '#ffc206',
    themeLighterAlt: '#fffdf5',
    themeLighter: '#fff5d7',
    themeLight: '#ffecb4',
    themeTertiary: '#ffda69',
    themeSecondary: '#ffc823',
    themeDarkAlt: '#e6ad05',
    themeDark: '#c29204',
    themeDarker: '#8f6c03',
    neutralLighterAlt: '#262626',
    neutralLighter: '#2f2f2f',
    neutralLight: '#3d3d3d',
    neutralQuaternaryAlt: '#464646',
    neutralQuaternary: '#4d4d4d',
    neutralTertiaryAlt: '#6b6b6b',
    neutralTertiary: '#ababab',
    neutralSecondary: '#8f8f8f',
    neutralPrimaryAlt: '#737373',
    neutralPrimary: '#fefefe',
    neutralDark: '#ebebeb',
    black: '#ababab',
    white: '#1b1b1b',
  },
});

type ThemeName = 'dark' | 'light';
interface ThemeStruct { theme: ThemeName };

const initialThemeContext: ThemeStruct = { theme: 'light' };
const ThemeContext = createContext<ThemeStruct>(initialThemeContext);

type ThemeAction = { type: 'SET_THEME'; theme: ThemeName; };
const themeReducer = (state: ThemeStruct, action: ThemeAction): ThemeStruct => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        theme: action.theme,
      };
    default:
      return state;
  }
};

type ThemeDispatch = Dispatch<ThemeAction>;
const ThemeDispatchContext = createContext<ThemeDispatch | undefined>(undefined);

interface Props { children: React.ReactElement | React.ReactElement[] }
export const ThemeEnabled: React.SFC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeContext);
  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <ThemeContext.Provider value={state}>
        {children}
      </ThemeContext.Provider>
    </ThemeDispatchContext.Provider>
  );
};

export const useTheme = () => {
  const state = useContext(ThemeContext);
  const dispatch = useContext(ThemeDispatchContext);

  // Theme Setter
  const setTheme = (theme: ThemeName): void => {
    if (theme === 'dark') {
      if (document) {
        document.documentElement.dataset.theme = 'dark';
      }
      Customizations.applySettings({ theme: monetDark });
    } else {
      if (document) {
        document.documentElement.dataset.theme = 'light';
      }
      Customizations.applySettings({ theme: monetLight });
    }
    dispatch({
      type: 'SET_THEME',
      theme,
    });
  };

  // Theme Getter
  const getTheme = (): ThemeName => state.theme;

  return { getTheme, setTheme };
};

export default useTheme;
