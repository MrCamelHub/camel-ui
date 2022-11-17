import type { ElementType, ReactElement } from 'react';

import type { Theme as EmotionTheme } from '@emotion/react';
import type { InterpolationWithTheme } from '@emotion/core';

import type { Color } from './css';
import type * as SvgIcons from '../assets/icons';

export type Variant = 'outlined' | 'ghost' | 'outlinedGhost' | 'contained' | 'inline';
export type BrandColor = 'gray' | 'black' | 'primary' | 'red' | 'purple';
export type BrandExtendsColor = 'dark' | 'light' | 'highlight' | 'bgLight';
export type Palette = Record<'main' | 'dark' | 'light' | 'highlight' | 'bgLight', Color>;
export type CommonPalette = Record<
  | 'ui20'
  | 'ui60'
  | 'ui80'
  | 'ui90'
  | 'ui95'
  | 'ui98'
  | 'uiWhite'
  | 'uiBlack'
  | 'bg01'
  | 'bg02'
  | 'bg03'
  | 'line01'
  | 'line02'
  | 'gradation0'
  | 'gradation180'
  | 'alpha60'
  | 'alpha40'
  | 'alpha20'
  | 'overlay60'
  | 'overlay40'
  | 'overlay20'
  | 'cmnW'
  | 'cmnB'
  | 'cmn20'
  | 'cmn80',
  Color
>;

export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export type TypographyVariant =
  | 'h0'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body1'
  | 'body2'
  | 'small1'
  | 'small2';
export type TypographyComponent = Extract<
  ElementType,
  'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span' | 'p' | 'article'
>;
export type TypographyWeight = {
  bold: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  medium: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  regular: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  light: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};
export type BoxRoundKey = '0' | '2' | '4' | '8' | '16' | '24';

export type CustomStyle = InterpolationWithTheme<EmotionTheme>;

export type GenericComponentProps<T> = T & {
  customStyle?: CustomStyle;
};

export type RequireAtOnlyOneIcon<T> = T &
  (
    | {
        iconOnly?: boolean;
        startIcon: ReactElement;
        endIcon?: never;
      }
    | {
        iconOnly?: boolean;
        startIcon?: never;
        endIcon: ReactElement;
      }
    | {
        iconOnly?: never;
        startIcon?: ReactElement;
        endIcon?: ReactElement;
      }
  );

export type IconName = keyof typeof SvgIcons;
