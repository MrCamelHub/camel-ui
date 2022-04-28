import { Interpolation, Theme as EmotionTheme } from '@emotion/react';
import { Property } from 'csstype';

import type { grey } from '../theme/colors';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type ColorProperty = Property.Color;
export type ColorCode = RGB | RGBA | HEX;
export type Color = ColorCode | ColorProperty;

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

export type GenericComponentProps<T> = T & {
  customStyle?: Interpolation<EmotionTheme>;
};

declare module '@emotion/react' {
  export interface Theme extends MrCamelTheme {}
}
