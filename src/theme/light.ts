import { grey } from '@theme/colors';
import { MrCamelTheme } from '../types';

export const light: MrCamelTheme = {
  palette: {
    primary: {
      main: '#1833FF',
      dark: '#000F80',
      light1: '#E5E8FF',
      light2: '#F5F6FF'
    },
    secondary: {
      red: {
        main: '#E5001B'
      },
      purple: {
        main: '#5800E5'
      }
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
      grey
    },
    box: {
      stroke: {
        primary: '#1833FF',
        grey: grey['80']
      }
    }
  }
};
