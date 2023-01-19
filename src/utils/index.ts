import type { BrandColor, CSSValue, Color, MrCamelTheme } from '../types';

export function getBrandColorCodeByColorName(
  theme: MrCamelTheme,
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
  } else if (colorName === 'white') {
    colorCode = theme.palette.common.uiWhite;
  }

  return colorCode;
}

export function convertNumberToCSSValue(value: CSSValue, unit?: string) {
  if (
    typeof value === 'number' ||
    (!Number.isNaN(Number(value)) && typeof Number(value) === 'number')
  ) {
    return `${value}${unit || 'px'}`;
  }
  return value;
}
