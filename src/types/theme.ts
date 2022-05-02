import { TypographyVariant, TypographyComponent, TypographyWeight, BoxRoundKey } from './component';
import { ColorCode, CSSValue } from './css';
import { grey } from '../theme/colors';

export type ThemeType = 'light';

// #TODO 추후 Layer 우선 순위 정립
export interface MrCamelTheme {
  type: ThemeType;
  palette: {
    primary: {
      main: ColorCode;
      dark: ColorCode;
      light1: ColorCode;
      light2: ColorCode;
    };
    secondary: {
      red: {
        main: ColorCode;
      };
      purple: {
        main: ColorCode;
      };
    };
    common: {
      black: ColorCode;
      white: ColorCode;
      grey: typeof grey;
    };
    box: {
      stroke: {
        primary: ColorCode;
        grey: ColorCode;
      };
    };
  };
  typography: {
    [key in TypographyVariant]: {
      component: TypographyComponent;
      size: CSSValue;
      weight: TypographyWeight;
      lineHeight: CSSValue;
      letterSpacing: CSSValue;
    };
  };
  box: {
    round: {
      [key in BoxRoundKey]: CSSValue;
    };
    shadow: {
      icon: string;
      platformLogo: string;
      category: string;
      modal: string;
      tooltip: string;
    };
  };
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

declare module '@emotion/react' {
  export interface Theme extends MrCamelTheme {}
}
