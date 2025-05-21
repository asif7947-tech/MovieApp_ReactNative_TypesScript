import {COLORS, DARK_COLORS} from './colors';
import {I_APP_THEME} from './types';

export const AppThemes: I_APP_THEME[] = [
  {
    key: 'light',
    title: 'Light',
    colors: COLORS,
  },
  {
    key: 'dark',
    title: 'Dark',
    colors: DARK_COLORS,
  },
];
