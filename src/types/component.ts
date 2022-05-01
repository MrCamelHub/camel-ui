import { ReactElement, ElementType, RefObject } from 'react';
import { Interpolation, Theme as EmotionTheme } from '@emotion/react';
import { Color } from './css';

export type Variant = 'outlined' | 'contained';
export type BrandColor =
  | 'primary'
  | 'primary-light1'
  | 'primary-light2'
  | 'primary-dark'
  | 'secondary-red'
  | 'common-black'
  | 'common-grey'
  | 'common-grey-light';
export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'small1' | 'small2';
export type TypographyComponent = Extract<ElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'div'>;
export type TypographyWeight = {
  bold: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  medium: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  regular: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  light: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};

export type GenericComponentProps<T, K> = T & {
  ref?: RefObject<K>;
  customStyle?: Interpolation<EmotionTheme>;
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

export type RequireAtOnlyOneColorProps<T, K extends BrandColor> = T &
  (
    | {
        brandColor?: K;
        customColor?: never;
      }
    | {
        brandColor?: never;
        customColor?: Color;
      }
  );
