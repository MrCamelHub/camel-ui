import type { ColorCode } from './css';
import type { grey } from '../theme/colors';

export type ThemeType = 'light';

export interface MrCamelTheme {
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
}

declare module '@emotion/react' {
  export interface Theme extends MrCamelTheme {}
}
