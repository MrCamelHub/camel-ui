import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import type { ChipProps } from '.';

export const StyledChip = styled.button<
  Pick<ChipProps, 'variant' | 'brandColor' | 'size' | 'weight' | 'isRound' | 'fullWidth'>
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border: 1px solid transparent;

  ${({
    theme,
    theme: {
      palette: { primary, common }
    },
    variant,
    brandColor
  }): CSSObject => {
    let cssObject: CSSObject;

    const brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    switch (variant) {
      case 'ghost': {
        if (brandColor === 'black') {
          cssObject = {
            backgroundColor: common.ui95,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        } else if (brandColor === 'gray') {
          cssObject = {
            backgroundColor: common.ui95,
            color: common.ui60,
            '& svg': {
              color: common.ui60
            }
          };
        } else {
          cssObject = {
            backgroundColor: primary.highlight,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }
        break;
      }
      case 'outline-ghost': {
        if (brandColor === 'black') {
          cssObject = {
            backgroundColor: common.ui95,
            color: brandColorCode,
            borderColor: common.line01,
            '& svg': {
              color: brandColorCode
            }
          };
        } else if (brandColor === 'gray') {
          cssObject = {
            backgroundColor: common.ui95,
            color: common.ui60,
            borderColor: common.line01,
            '& svg': {
              color: common.ui60
            }
          };
        } else {
          cssObject = {
            backgroundColor: primary.highlight,
            color: brandColorCode,
            borderColor: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }
        break;
      }
      case 'solid': {
        if (brandColor === 'white') {
          cssObject = {
            backgroundColor: brandColorCode,
            color: common.ui20,
            '& svg': {
              color: common.ui20
            }
          };
        } else {
          cssObject = {
            backgroundColor: brandColor === 'gray' ? common.ui60 : brandColorCode,
            color: brandColor === 'black' ? common.uiWhite : common.cmnW,
            '& svg': {
              color: brandColor === 'black' ? common.uiWhite : common.cmnW
            }
          };
        }

        break;
      }
      default: {
        if (brandColor === 'gray') {
          cssObject = {
            backgroundColor: common.uiWhite,
            borderColor: brandColorCode,
            color: common.ui20,
            '& > svg': {
              color: common.ui20
            }
          };
        } else {
          cssObject = {
            backgroundColor: common.uiWhite,
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
    ${({
      theme: {
        palette: { common }
      }
    }): CSSObject => ({
      borderColor: 'transparent',
      backgroundColor: common.ui90,
      color: common.ui80,
      '& svg': {
        color: common.ui80
      }
    })}
  }
`;

export const EndIcon = styled.div<Pick<ChipProps, 'size'>>`
  display: inline-flex;
  align-items: center;
  ${({ size }): CSSObject => {
    switch (size) {
      case 'xsmall': {
        return {
          '& > svg': {
            width: 'auto',
            height: 10
          }
        };
      }
      case 'small': {
        return {
          '& > svg': {
            width: 'auto',
            height: 12
          }
        };
      }
      case 'large': {
        return {
          '& > svg': {
            width: 'auto',
            height: 15
          }
        };
      }
      case 'xlarge': {
        return {
          '& > svg': {
            width: 'auto',
            height: 17
          }
        };
      }
      default: {
        return {
          '& > svg': {
            width: 'auto',
            height: 14
          }
        };
      }
    }
  }}
`;

export const SubText = styled.span<Pick<ChipProps, 'variant' | 'brandColor' | 'size'>>`
  margin-left: ${({ size }) => (size === 'xsmall' ? 0 : '-2px')};

  ${({
    theme: {
      palette: { common }
    },
    variant,
    brandColor
  }): CSSObject => {
    if (variant !== 'solid' && (brandColor === 'black' || brandColor === 'gray')) {
      return {
        color: common.ui60
      };
    }
    return {};
  }}
`;
