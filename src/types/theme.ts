import type { CSSValue } from './css';
import type {
  BoxRoundKey,
  CommonPalette,
  Palette,
  TypographyComponent,
  TypographyVariant,
  TypographyWeight
} from './component';

export type ThemeMode = 'light' | 'dark';

export interface MrCamelTheme {
  mode: ThemeMode;
  palette: {
    primary: Palette;
    secondary: {
      purple: Palette;
      red: Palette;
      blue: Palette;
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
