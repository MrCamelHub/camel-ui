import { getBrandColorCodeByColorName } from '@utils';
import styled, { CSSObject } from '@emotion/styled';

import type { LabelProps } from '.';

export const StyledLabel = styled.label<
  Pick<LabelProps, 'variant' | 'brandColor' | 'size' | 'round'>
>`
  display: inline-flex;
  align-items: center;
  min-width: fit-content;
  gap: 2px;
  border: 1px solid transparent;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};

  ${({
    theme,
    theme: {
      palette: { primary, secondary, common }
    },
    variant,
    brandColor
  }): CSSObject => {
    let cssObject: CSSObject = {};

    const brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    switch (variant) {
      case 'solid':
        if (brandColor === 'gray') {
          cssObject = {
            backgroundColor: common.ui60,
            color: common.uiWhite,
            '& svg': {
              color: common.uiWhite
            }
          };
        } else {
          cssObject = {
            backgroundColor: brandColorCode,
            color: brandColor === 'black' ? common.uiWhite : common.cmnW,
            '& svg': {
              color: brandColor === 'black' ? common.uiWhite : common.cmnW
            }
          };
        }
        break;
      case 'ghost':
        cssObject = {
          backgroundColor: primary.highlight,
          color: brandColorCode,
          '& svg': {
            color: brandColorCode
          }
        };

        if (brandColor === 'gray') {
          cssObject = {
            backgroundColor: common.ui95,
            color: common.ui60,
            '& svg': {
              color: common.ui60
            }
          };
        }

        if (brandColor === 'red') {
          cssObject = {
            backgroundColor: secondary.red.highlight,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }

        if (brandColor === 'black') {
          cssObject = {
            backgroundColor: common.ui90,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }
        break;
      case 'darked':
        if (brandColor === 'black') {
          cssObject = {
            backgroundColor: common.uiBlack,
            color: common.uiWhite,
            '& svg': {
              color: common.uiWhite
            }
          };
        }

        if (brandColor === 'primary') {
          cssObject = {
            backgroundColor: primary.dark,
            color: common.cmnW,
            '& svg': {
              color: common.cmnW
            }
          };
        }

        if (brandColor === 'blue') {
          cssObject = {
            backgroundColor: secondary.blue.dark,
            color: common.cmnW,
            '& svg': {
              color: common.cmnW
            }
          };
        }

        if (brandColor === 'red') {
          cssObject = {
            backgroundColor: secondary.red.dark,
            color: common.cmnW,
            '& svg': {
              color: common.cmnW
            }
          };
        }
        break;
      default:
        if (brandColor === 'gray') {
          cssObject = {
            backgroundColor: common.uiWhite,
            borderColor: brandColorCode,
            color: common.ui60,
            '& svg': {
              color: common.ui60
            }
          };
        } else {
          cssObject = {
            backgroundColor: common.uiWhite,
            borderColor: brandColorCode,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }
        break;
    }

    return cssObject;
  }};

  ${({ theme: { typography }, size }): CSSObject => {
    switch (size) {
      case 'xsmall': {
        return {
          height: 18,
          padding: '3px 4px',
          fontSize: typography.small2.size,
          fontWeight: typography.small2.weight.medium,
          lineHeight: typography.small2.lineHeight,
          letterSpacing: typography.small2.letterSpacing,
          '& > svg': {
            width: 'auto',
            height: 12
          }
        };
      }
      default: {
        return {
          height: 24,
          padding: '4px 6px',
          fontSize: typography.body2.size,
          fontWeight: typography.body2.weight.medium,
          lineHeight: typography.body2.lineHeight,
          letterSpacing: typography.body2.letterSpacing,
          '& > svg': {
            width: 'auto',
            height: 16
          }
        };
      }
    }
  }}
`;
