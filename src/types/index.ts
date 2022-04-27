import { Interpolation, Theme as EmotionTheme } from '@emotion/react';
import { grey } from '../theme/colors';

export type ThemeType = 'light';

export interface MrCamelTheme {
  palette: {
    primary: {
      main: string;
      dark: string;
      light1: string;
      light2: string;
    };
    secondary: {
      red: {
        main: string;
      };
      purple: {
        main: string;
      };
    };
    common: {
      black: string;
      white: string;
      grey: typeof grey;
    };
  };
}

export type GenericComponentProps<T> = T & {
  customStyle?: Interpolation<EmotionTheme>;
};

declare module '@emotion/react' {
  export interface Theme extends MrCamelTheme {}
}
