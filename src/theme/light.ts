import { grey } from '@theme/colors';

import type { MrCamelTheme } from '../types';

export const light: MrCamelTheme = {
  type: 'light',
  palette: {
    primary: {
      main: '#2937FF',
      dark: '#373D8C',
      light: '#5C67FF',
      highlight: '#E0E2FF',
      bgLight: '#F0F1FF'
    },
    secondary: {
      red: {
        main: '#E52535',
        dark: '#8C2B33',
        light: '#FF5260',
        highlight: '#FFE0E3',
        bgLight: '#FFF0F1'
      },
      purple: {
        main: '#6314FF',
        dark: '#4B2B8C',
        light: '#8547FF',
        highlight: '#EAE0FF',
        bgLight: '#F5F0FF'
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
      size: '32px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: '42px',
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
      lineHeight: '32px',
      letterSpacing: '-0.2px'
    },
    h3: {
      component: 'h3',
      size: '17px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: '24px',
      letterSpacing: '-0.2px'
    },
    h4: {
      component: 'h4',
      size: '15px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: '20px',
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
      lineHeight: '20px',
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
      lineHeight: '16px',
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
      lineHeight: '16px',
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
      lineHeight: '12px',
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
  },
  zIndex: {
    button: 10,
    header: 10,
    bottomNav: 10,
    dialog: 20,
    sheet: 20,
    alert: 20,
    toast: 30,
    tooltip: 40
  }
};
