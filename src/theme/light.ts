import { blue, common, gray, indgo, purple, red } from '@theme/colors';

import type { CamelTheme } from '@types';

const light: CamelTheme = {
  mode: 'light',
  palette: {
    primary: {
      main: indgo['50A'],
      light: indgo['50'],
      dark: indgo['70'],
      highlight: indgo['20'],
      bgLight: indgo['10']
    },
    secondary: {
      purple: {
        main: purple['50A'],
        light: purple['50'],
        dark: purple['70'],
        highlight: purple['20'],
        bgLight: purple['10']
      },
      red: {
        main: red['50A'],
        light: red['50'],
        dark: red['70'],
        highlight: red['20'],
        bgLight: red['10']
      },
      blue: {
        main: blue['50A'],
        light: blue['50'],
        dark: blue['70'],
        highlight: blue['20'],
        bgLight: blue['10']
      }
    },
    common: {
      ui20: gray['70'],
      ui60: gray['50'],
      ui80: gray['40'],
      ui90: gray['30'],
      ui95: gray['20'],
      ui98: gray['10'],
      uiWhite: common.white,
      uiBlack: common.black,
      bg01: common.white,
      bg02: gray['20'],
      bg03: gray['10'],
      line01: gray['30'],
      line02: gray['20'],
      gradation0: `linear-gradient(180deg, ${common.gradationW[0]} 0%, ${common.gradationW[1]} 100%)`,
      gradation180: `linear-gradient(180deg, ${common.gradationW[1]} 0%, ${common.gradationW[0]} 100%)`,
      alpha60: 'rgba(255, 255, 255, 0.6)',
      alpha40: 'rgba(255, 255, 255, 0.4)',
      alpha20: 'rgba(255, 255, 255, 0.2)',
      overlay60: 'rgba(0, 0, 0, 0.6)',
      overlay40: 'rgba(0, 0, 0, 0.4)',
      overlay20: 'rgba(0, 0, 0, 0.2)',
      cmnW: common.white,
      cmnB: common.black,
      cmn80: gray['80'],
      cmn20: gray['20']
    }
  },
  typography: {
    h0: {
      component: 'h1',
      size: '40px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: '54px',
      letterSpacing: '-0.01em'
    },
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
      letterSpacing: '-0.01em'
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
      letterSpacing: '-0.01em'
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
      letterSpacing: '-0.01em'
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
      letterSpacing: '-0.01em'
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
      letterSpacing: '-0.01em'
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
      letterSpacing: '-0.01em'
    },
    body3: {
      component: 'div',
      size: '10px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300
      },
      lineHeight: '14px',
      letterSpacing: '-0.01em'
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
      letterSpacing: '-0.01em'
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

export default light;
