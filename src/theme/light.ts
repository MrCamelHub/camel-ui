import { grey } from '@theme/colors';
import { MrCamelTheme } from '../types';

export const light: MrCamelTheme = {
  type: 'light',
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
  },
  typography: {
    h1: {
      component: 'h1',
      size: '36px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: `${36 * 1.5}px`,
      letterSpacing: '-0.2px'
    },
    h2: {
      component: 'h2',
      size: '24px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: `${24 * 1.5}px`,
      letterSpacing: '-0.2px'
    },
    h3: {
      component: 'h3',
      size: '18px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: `${18 * 1.5}px`,
      letterSpacing: '-0.2px'
    },
    h4: {
      component: 'h4',
      size: '16px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: `${16 * 1.5}px`,
      letterSpacing: '-0.2px'
    },
    body1: {
      component: 'div',
      size: '14px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: `${14 * 1.5}px`,
      letterSpacing: '-0.2px'
    },
    body2: {
      component: 'div',
      size: '12px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: `${12 * 1.5}px`,
      letterSpacing: '-0.2px'
    },
    small1: {
      component: 'div',
      size: '12px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: `${12 * 1.5}px`,
      letterSpacing: '-0.2px'
    },
    small2: {
      component: 'div',
      size: '10px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: `${10 * 1.5}px`,
      letterSpacing: '-0.2px'
    }
  }
};
