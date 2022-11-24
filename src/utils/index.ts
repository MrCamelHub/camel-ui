import type { Theme } from '@emotion/react';

import type { BrandColor, CSSValue, Color } from '../types';

export function getBrandColorCodeByColorName(
  theme: Theme,
  colorName?: BrandColor,
  initialColorCode = true
): Color | undefined {
  let colorCode = !initialColorCode ? undefined : theme.palette.primary.main;

  if (colorName === 'gray') {
    colorCode = theme.palette.common.line01;
  } else if (colorName === 'black') {
    colorCode = theme.palette.common.ui20;
  } else if (colorName === 'primary') {
    colorCode = theme.palette.primary.main;
  } else if (colorName === 'blue') {
    colorCode = theme.palette.primary.light;
  } else if (colorName === 'red') {
    colorCode = theme.palette.secondary.red.main;
  }

  return colorCode;
}

export function convertNumberToCSSValue(value: CSSValue, unit?: string) {
  if (typeof value === 'number') {
    return `${value}${unit || 'px'}`;
  }
  return value;
}
