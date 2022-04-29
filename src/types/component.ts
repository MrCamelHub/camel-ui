import type { RefObject } from 'react';
import type { Interpolation, Theme as EmotionTheme } from '@emotion/react';

export type Variant = 'outlined' | 'contained';
export type ComponentColor = 'default' | 'primary' | 'black' | 'grey';
export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export type GenericComponentProps<T, K> = T & {
  ref?: RefObject<K>;
  customStyle?: Interpolation<EmotionTheme>;
};
