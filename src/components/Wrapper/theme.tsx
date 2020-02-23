import { createTheme } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';

initializeIcons(undefined, { disableWarnings: true });

export const monetLight = createTheme({
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
    black: '#353535',
    white: '#fefefe',
  },
});

export const monetDark = createTheme({
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
    neutralDark: '#3b3b3b',
    black: '#1f1f1f',
    white: '#1b1b1b',
  },
});
