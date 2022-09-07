import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { LabelProps } from '.';

export const StyledLabel = styled.label<Pick<LabelProps, 'variant' | 'brandColor' | 'size'>>`
  display: inline-flex;
  align-items: center;
  min-width: fit-content;
  border: 1px solid transparent;
  border-radius: 4px;

  ${({ theme, theme: { palette }, variant, brandColor }): CSSObject => {
    let cssObject: CSSObject;

    const brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    switch (variant) {
      case 'contained':
        cssObject = {
          backgroundColor: brandColorCode,
          color: brandColor === 'black' ? palette.common.uiWhite : palette.common.cmnW,
          '& svg': {
            color: brandColor === 'black' ? palette.common.uiWhite : palette.common.cmnW
          }
        };
        break;
      case 'ghost':
        cssObject = {
          backgroundColor: palette.primary.highlight,
          color: brandColorCode,
          '& svg': {
            color: brandColorCode
          }
        };

        if (brandColor === 'red') {
          cssObject = {
            backgroundColor: palette.secondary.red.highlight,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }

        if (brandColor === 'black') {
          cssObject = {
            backgroundColor: palette.common.ui90,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }

        if (brandColor === 'primary-light') {
          cssObject = {
            backgroundColor: palette.primary.highlight,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }
        break;
      case 'darked':
        cssObject = {
          backgroundColor: palette.primary.dark,
          color: palette.common.uiWhite,
          '& svg': {
            color: palette.common.uiWhite
          }
        };

        if (brandColor === 'red') {
          cssObject = {
            backgroundColor: palette.secondary.red.dark,
            color: palette.common.uiWhite,
            '& svg': {
              color: palette.common.uiWhite
            }
          };
        }
        break;
      default:
        cssObject = {
          backgroundColor: palette.common.uiWhite,
          borderColor: brandColorCode,
          color: brandColorCode,
          '& svg': {
            color: brandColorCode
          }
        };
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
          letterSpacing: typography.small2.letterSpacing
        };
      }
      default: {
        return {
          height: 24,
          padding: '4px 6px',
          fontSize: typography.small1.size,
          fontWeight: typography.small1.weight.medium,
          lineHeight: typography.small1.lineHeight,
          letterSpacing: typography.small1.letterSpacing
        };
      }
    }
  }}
`;
