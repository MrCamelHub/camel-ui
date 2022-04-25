import { Interpolation, Theme as EmotionTheme } from '@emotion/react';

export type ThemeType = 'light';

export interface MrCamelTheme {
  primary: string;
}

export type GenericComponentProps<T> = T & {
  customStyle?: Interpolation<EmotionTheme>;
};

declare module '@emotion/react' {
  export interface Theme extends MrCamelTheme {}
}
