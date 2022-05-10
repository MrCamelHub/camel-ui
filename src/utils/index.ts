import type { Theme } from '@emotion/react';

import type { BrandColor, BrandExtendsColor, Color } from '../types';

export function getBrandColorCodeByColorName(
  theme: Theme,
  colorName?: BrandColor | `${Extract<BrandColor, 'primary'>}-${BrandExtendsColor}`,
  initialColorCode = true
): Color | undefined {
  let colorCode = !initialColorCode ? undefined : theme.palette.primary.main;

  if (colorName === 'grey') {
    colorCode = theme.palette.common.grey['80'];
  } else if (colorName === 'black') {
    colorCode = theme.palette.common.grey['20'];
  } else if (colorName === 'red') {
    colorCode = theme.palette.secondary.red.main;
  } else if (colorName === 'purple') {
    colorCode = theme.palette.secondary.purple.main;
  } else if (colorName === 'primary') {
    colorCode = theme.palette.primary.main;
  } else if (colorName === 'primary-dark') {
    colorCode = theme.palette.primary.dark;
  } else if (colorName === 'primary-light') {
    colorCode = theme.palette.primary.light;
  } else if (colorName === 'primary-highlight') {
    colorCode = theme.palette.primary.highlight;
  } else if (colorName === 'primary-bgLight') {
    colorCode = theme.palette.primary.bgLight;
  }

  return colorCode;
}
