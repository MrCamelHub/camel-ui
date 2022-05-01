import { TypographyVariant, TypographyComponent, TypographyWeight } from './component';
import { ColorCode, CSSValue } from './css';
import { grey } from '../theme/colors';

export type ThemeType = 'light';

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
}

declare module '@emotion/react' {
  export interface Theme extends MrCamelTheme {}
}
