import type {
  BrandColor,
  BrandExtendsColor,
  CSSValue,
  CamelTheme,
  Color,
  CommonPalette,
  ComponentColor
} from '@types';

export function getBrandColorCodeByColorName(
  theme: CamelTheme,
  colorName?: ComponentColor
): Color | undefined {
  const {
    palette: { primary, secondary, common }
  } = theme;

  if (typeof colorName !== 'string') return colorName;

  let colorCode = colorName;

  const splitColorNames = colorName.split('-');
  const mainColorName = splitColorNames[0] as BrandColor | keyof CommonPalette;
  const extendsColorName = (splitColorNames[1] || 'main') as BrandExtendsColor & 'main';

  if (mainColorName === 'gray') {
    colorCode = common.line01;
  } else if (mainColorName === 'black') {
    colorCode = common.ui20;
  } else if (mainColorName === 'white') {
    colorCode = common.uiWhite;
  } else if (mainColorName === 'primary') {
    colorCode = primary[extendsColorName];
  } else if (['red', 'purple', 'blue'].includes(mainColorName)) {
    colorCode =
      secondary[mainColorName as Extract<BrandColor, 'red' | 'purple' | 'blue'>][extendsColorName];
  } else if (common[mainColorName as keyof CommonPalette]) {
    colorCode = common[mainColorName as keyof CommonPalette];
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
