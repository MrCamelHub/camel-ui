import { grey } from '@theme/colors';

import type { MrCamelTheme } from '../types';

export const light: MrCamelTheme = {
  type: 'light',
  palette: {
    primary: {
      main: '#1833FF',
      dark: '#000F80',
      light: '#808EFF',
      highlight: '#E5E8FF',
      bgLight: '#F5F6FF'
    },
    secondary: {
      red: {
        main: '#E5001B',
        dark: '#B20015',
        light: '#FF808E',
        highlight: '#FFE5E8',
        bgLight: '#FFF5F6'
      },
      purple: {
        main: '#5800E5',
        dark: '#4400B2',
        light: '#B080FF',
        highlight: '#EFE5FF',
        bgLight: '#F9F5FF'
      }
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
      grey
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
  },
  box: {
    round: {
      '0': '0px',
      '2': '2px',
      '4': '4px',
      '8': '8px',
      '16': '16px',
      '24': '24px'
    },
    shadow: {
      icon: '0px 0px 2px rgba(0, 0, 0, 0.4)',
      platformLogo: '0px 0px 2px rgba(0, 0, 0, 0.2)',
      category: '0px 0px 8px rgba(0, 0, 0, 0.1)',
      modal: '0px 0px 16px rgba(0, 0, 0, 0.1)',
      tooltip: '0px 0px 16px rgba(0, 0, 0, 0.2)'
    }
  },
  breakpoints: {
    xs: 0,
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1440
  }
};
