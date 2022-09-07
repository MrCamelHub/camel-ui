import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { ChipProps } from './index';

export const StyledChip = styled.button<
  Pick<ChipProps, 'variant' | 'brandColor' | 'size' | 'weight' | 'isRound' | 'fullWidth'>
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border: 1px solid transparent;

  ${({ theme, theme: { palette }, variant, brandColor }): CSSObject => {
    let cssObject: CSSObject = {};

    const brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    switch (variant) {
      case 'ghost': {
        if (brandColor === 'black' || brandColor === 'gray') {
          cssObject = {
            backgroundColor: palette.common.gray.ui95,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }

        if (brandColor === 'primary' || brandColor === 'primary-light') {
          cssObject = {
            backgroundColor: palette.primary.highlight,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }
        break;
      }
      case 'outlinedGhost': {
        if (brandColor === 'black' || brandColor === 'gray') {
          cssObject = {
            backgroundColor: palette.common.gray.ui95,
            color: brandColorCode,
            borderColor: palette.common.gray.line01,
            '& svg': {
              color: brandColorCode
            }
          };
        }

        if (brandColor === 'primary' || brandColor === 'primary-light') {
          cssObject = {
            backgroundColor: palette.primary.highlight,
            color: brandColorCode,
            borderColor: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }
        break;
      }
      case 'contained': {
        cssObject = {
          backgroundColor: brandColorCode,
          color:
            brandColor === 'black' ? palette.common.gray.uiWhite : palette.common.gray.solidText,
          '& svg': {
            color:
              brandColor === 'black' ? palette.common.gray.uiWhite : palette.common.gray.solidText
          }
        };

        break;
      }
      default: {
        if (brandColor === 'gray') {
          cssObject = {
            backgroundColor: palette.common.gray.uiWhite,
            borderColor: palette.common.gray.line01,
            color: palette.common.gray.ui20,
            '& > svg': {
              color: palette.common.gray.ui20
            }
          };
        } else {
          cssObject = {
            backgroundColor: palette.common.gray.uiWhite,
            borderColor: brandColorCode,
            color: brandColorCode,
            '& > svg': {
              color: brandColorCode
            }
          };
        }

        break;
      }
    }

    return cssObject;
  }}

  ${({ theme: { typography }, size, weight = 'regular', isRound }): CSSObject => {
    switch (size) {
      case 'xsmall': {
        return {
          height: 26,
          padding: isRound ? '6px 8px' : 6,
          borderRadius: isRound ? 13 : 8,
          gap: 2,
          fontSize: typography.small2.size,
          fontWeight: typography.small2.weight[weight],
          lineHeight: typography.small2.lineHeight,
          letterSpacing: typography.small2.letterSpacing,
          '& > svg': {
            width: 'auto',
            height: 12
          }
        };
      }
      case 'small': {
        return {
          height: 28,
          padding: isRound ? '6px 8px' : 6,
          borderRadius: isRound ? 14 : 8,
          gap: 4,
          fontSize: typography.body2.size,
          fontWeight: typography.body2.weight[weight],
          lineHeight: typography.body2.lineHeight,
          letterSpacing: typography.body2.letterSpacing,
          '& > svg': {
            width: 'auto',
            height: 16
          }
        };
      }
      case 'large': {
        return {
          height: 36,
          padding: isRound ? '8px 12px' : 8,
          borderRadius: isRound ? 18 : 8,
          gap: 4,
          fontSize: typography.h4.size,
          fontWeight: typography.h4.weight[weight],
          lineHeight: typography.h4.lineHeight,
          letterSpacing: typography.h4.letterSpacing,
          '& > svg': {
            width: 'auto',
            height: 20
          }
        };
      }
      case 'xlarge': {
        return {
          height: 44,
          padding: isRound ? '10px 14px' : 10,
          borderRadius: isRound ? 36 : 8,
          gap: 4,
          fontSize: typography.h3.size,
          fontWeight: typography.h3.weight[weight],
          lineHeight: typography.h3.lineHeight,
          letterSpacing: typography.h3.letterSpacing,
          '& > svg': {
            width: 'auto',
            height: 24
          }
        };
      }
      default: {
        return {
          height: 32,
          padding: isRound ? '6px 10px' : 6,
          borderRadius: isRound ? 16 : 8,
          gap: 4,
          fontSize: typography.body1.size,
          fontWeight: typography.body1.weight[weight],
          lineHeight: typography.body1.lineHeight,
          letterSpacing: typography.body1.letterSpacing,
          '& > svg': {
            width: 'auto',
            height: 20
          }
        };
      }
    }
  }}

  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}}

  &:disabled {
    ${({ theme: { palette } }): CSSObject => ({
      borderColor: 'transparent',
      backgroundColor: palette.common.gray.ui80,
      color: palette.common.gray.ui60,
      '& svg': {
        color: palette.common.gray.ui60
      }
    })}
  }
`;
