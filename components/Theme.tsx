import React, {
  createContext, useReducer, useContext, Dispatch,
} from 'react';
import { createTheme, Customizations, IRawStyle } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';

initializeIcons(undefined, { disableWarnings: true });

const notoFont: IRawStyle = {
  fontFamily: '"Noto Sans CJK KR", "Noto Sans KR", sans-serif',
  fontWeight: 'normal',
};

const monetLight = createTheme({
  defaultFontStyle: notoFont,
  palette: {
    themePrimary: '#6666cc',
    themeLighterAlt: '#f8f8fd',
    themeLighter: '#e3e3f7',
    themeLight: '#ccccf0',
    themeTertiary: '#9d9de0',
    themeSecondary: '#7676d2',
    themeDarkAlt: '#5c5cb8',
    themeDark: '#4e4e9b',
    themeDarker: '#393972',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  },
});

const monetDark = createTheme({
  defaultFontStyle: notoFont,
  palette: {
    themePrimary: '#6666cc',
    themeLighterAlt: '#f8f8fd',
    themeLighter: '#e3e3f7',
    themeLight: '#ccccf0',
    themeTertiary: '#9d9de0',
    themeSecondary: '#7676d2',
    themeDarkAlt: '#5c5cb8',
    themeDark: '#4e4e9b',
    themeDarker: '#393972',
    neutralLighterAlt: '#232221',
    neutralLighter: '#2c2b29',
    neutralLight: '#3b3937',
    neutralQuaternaryAlt: '#44423f',
    neutralQuaternary: '#4b4946',
    neutralTertiaryAlt: '#6a6764',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#1a1918',
  },
});

type ThemeName = 'dark' | 'light';
interface ThemeStruct { theme: ThemeName, locked: boolean };

const initialThemeContext: ThemeStruct = { theme: 'light', locked: false };
const ThemeContext = createContext<ThemeStruct>(initialThemeContext);

type ThemeAction =
  { type: 'SET_THEME'; theme: ThemeName; }
  | { type: 'SET_LOCK_STATE'; locked: boolean; };
const themeReducer = (state: ThemeStruct, action: ThemeAction): ThemeStruct => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.theme,
      };
    case 'SET_LOCK_STATE':
      return {
        ...state,
        locked: action.locked,
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
    if (!state.locked) {
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
    }
  };

  // Theme Getter
  const getTheme = (): ThemeName => state.theme;

  // Lock Getter
  const isThemeLocked = (): boolean => state.locked;

  // Locker
  const lockTheme = (): void => {
    dispatch({
      type: 'SET_LOCK_STATE',
      locked: true,
    });
  };

  // Unlocker
  const unlockTheme = (): void => {
    dispatch({
      type: 'SET_LOCK_STATE',
      locked: false,
    });
  };

  return {
    getTheme, setTheme, lockTheme, unlockTheme, isThemeLocked,
  };
};

export default useTheme;
