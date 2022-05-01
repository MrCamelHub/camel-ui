import { Theme } from '@emotion/react';
import { Color, BrandColor } from '../types';

export function getBrandColorCodeByColorName(theme: Theme, colorName?: BrandColor): Color {
  let colorCode = theme.palette.primary.main;

  if (colorName === 'primary-light1') {
    colorCode = theme.palette.primary.light1;
  } else if (colorName === 'primary-light2') {
    colorCode = theme.palette.primary.light2;
  } else if (colorName === 'grey') {
    colorCode = theme.palette.common.grey['20'];
  } else if (colorName === 'grey-light') {
    colorCode = theme.palette.common.grey['96'];
  }

  return colorCode;
}
