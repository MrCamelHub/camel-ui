import type { CSSValue, ColorCode } from './css';
import type {
  BoxRoundKey,
  Palette,
  TypographyComponent,
  TypographyVariant,
  TypographyWeight
} from './component';
import { grey } from '../theme/colors';

export type ThemeType = 'light';

// #TODO 추후 Layer 우선 순위 정립
export interface MrCamelTheme {
  type: ThemeType;
  palette: {
    primary: Palette;
    secondary: {
      red: Palette;
      purple: Palette;
    };
    common: {
      black: ColorCode;
      white: ColorCode;
      grey: typeof grey;
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
    shadow: Record<'icon' | 'platformLogo' | 'category' | 'modal' | 'tooltip', string>;
  };
  breakpoints: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
  zIndex: Record<
    'button' | 'header' | 'bottomNav' | 'dialog' | 'sheet' | 'alert' | 'toast',
    number
  >;
}

declare module '@emotion/react' {
  export interface Theme extends MrCamelTheme {}
}
