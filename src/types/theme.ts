import type { CSSValue } from './css';
import type {
  BoxRoundKey,
  CommonPalette,
  Palette,
  TypographyComponent,
  TypographyVariant,
  TypographyWeight
} from './component';

export type ThemeType = 'light' | 'dark';

// #TODO 추후 Layer 우선 순위 정립
export interface MrCamelTheme {
  type: ThemeType;
  palette: {
    primary: Palette;
    secondary: {
      red: Palette;
      blue: Palette;
      purple: Palette;
    };
    common: {
      gray: CommonPalette;
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
    'button' | 'header' | 'bottomNav' | 'dialog' | 'sheet' | 'alert' | 'toast' | 'tooltip',
    number
  >;
}

declare module '@emotion/react' {
  export interface Theme extends MrCamelTheme {}
}
