import type { RefObject } from 'react';
import { Interpolation, Theme as EmotionTheme } from '@emotion/react';

import type { ColorCode } from './css';
import type { grey } from '../theme/colors';

export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type CommonColorKey = '20' | '40' | '60' | '80' | '90' | '96' | '98';

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

export type GenericComponentProps<T, K> = T & {
  ref?: RefObject<K>;
  customStyle?: Interpolation<EmotionTheme>;
};

declare module '@emotion/react' {
  export interface Theme extends MrCamelTheme {}
}
