import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import type { ButtonProps } from '.';

export const StyledButton = styled.button<
  Pick<ButtonProps, 'variant' | 'brandColor' | 'size' | 'weight' | 'fullWidth' | 'disablePadding'>
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: fit-content;
  border: 1px solid transparent;
  border-radius: 8px;

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
      case 'outlineGhost': {
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
      case 'inline':
        cssObject = {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: brandColor === 'gray' ? common.ui60 : brandColorCode,
          '& > svg': {
            color: brandColor === 'gray' ? common.ui60 : brandColorCode
          }
        };
        break;
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

  ${({ theme: { typography }, size, weight = 'medium' }): CSSObject => {
    switch (size) {
      case 'small': {
        return {
          height: 32,
          padding: 8,
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
          height: 44,
          padding: 12,
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
          gap: 6,
          height: 52,
          padding: 14,
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
          height: 36,
          padding: 8,
          fontSize: typography.body1.size,
          fontWeight: typography.body1.weight[weight],
          lineHeight: typography.body1.lineHeight,
          letterSpacing: typography.body1.letterSpacing,
          '& > svg': {
            width: 20,
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
  
  ${({ disablePadding }): CSSObject =>
    disablePadding
      ? {
          height: 'auto',
          padding: 0,
          gap: 4
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

export const SubText = styled.span<Pick<ButtonProps, 'size'>>`
  margin-left: ${({ size }) => (size === 'xlarge' ? '-2px' : 0)};
  color: ${({
    theme: {
      palette: { common }
    }
  }) => common.ui80};
`;
