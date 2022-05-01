import { Theme } from '@emotion/react';
import { BrandColor, Color } from '../types';

export function getBrandColorCodeByColorName(
  theme: Theme,
  colorName?: BrandColor | Color,
  initialColorCode = true
): Color | undefined {
  let colorCode = !initialColorCode ? undefined : theme.palette.primary.main;

  if (colorName === 'primary') {
    colorCode = theme.palette.primary.main;
  } else if (colorName === 'primary-light1') {
    colorCode = theme.palette.primary.light1;
  } else if (colorName === 'primary-light2') {
    colorCode = theme.palette.primary.light2;
  } else if (colorName === 'common-black') {
    colorCode = theme.palette.common.black;
  } else if (colorName === 'common-grey') {
    colorCode = theme.palette.common.grey['20'];
  } else if (colorName === 'common-grey-light') {
    colorCode = theme.palette.common.grey['96'];
  }

  return colorCode;
}
