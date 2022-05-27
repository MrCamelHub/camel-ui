import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { CtaButtonProps } from '.';

export const StyledCtaButton = styled.button<
  Pick<CtaButtonProps, 'variant' | 'brandColor' | 'size' | 'fullWidth'>
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  border: 1px solid transparent;
  border-radius: 8px;

  ${({ theme, theme: { palette }, variant, brandColor }): CSSObject => {
    let cssObject: CSSObject = {};

    const brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    switch (variant) {
      case 'contained':
        cssObject = {
          backgroundColor: brandColorCode,
          color: palette.common.white,
          '& svg': {
            color: palette.common.white
          }
        };
        break;
      case 'ghost':
        if (brandColor === 'grey') {
          cssObject = {
            backgroundColor: brandColorCode,
            color: palette.common.grey['20'],
            '& svg': {
              color: palette.common.grey['20']
            }
          };
        }

        if (brandColor === 'black') {
          cssObject = {
            backgroundColor: palette.common.grey['95'],
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }

        if (brandColor === 'primary') {
          cssObject = {
            backgroundColor: palette.primary.highlight,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }

        if (brandColor === 'red') {
          cssObject = {
            backgroundColor: palette.secondary.red.highlight,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }

        if (brandColor === 'purple') {
          cssObject = {
            backgroundColor: palette.secondary.purple.highlight,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }
        break;
      default:
        cssObject = {
          backgroundColor: palette.common.white,
          borderColor: brandColorCode,
          color: brandColorCode,
          '& > svg': {
            color: brandColorCode
          }
        };

        if (brandColor === 'grey') {
          cssObject = {
            backgroundColor: palette.common.white,
            borderColor: brandColorCode,
            color: palette.common.grey['20'],
            '& > svg': {
              color: palette.common.grey['20']
            }
          };
        }
        break;
    }

    return cssObject;
  }}

  ${({ theme: { typography }, size }): CSSObject => {
    switch (size) {
      case 'large':
        return {
          height: 48,
          padding: '0 12px',
          fontSize: typography.body1.size,
          fontWeight: typography.body1.weight.bold,
          lineHeight: typography.body1.lineHeight,
          letterSpacing: typography.body1.letterSpacing
        };
      default:
        return {
          height: 41,
          padding: '0 10px',
          fontSize: typography.body1.size,
          fontWeight: typography.body1.weight.medium,
          lineHeight: typography.body1.lineHeight,
          letterSpacing: typography.body1.letterSpacing
        };
    }
  }};

  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}};

  &:disabled {
    ${({ theme: { palette } }): CSSObject => ({
      borderColor: 'transparent',
      backgroundColor: palette.common.grey['80'],
      color: palette.common.grey['60'],
      '& svg': {
        color: palette.common.grey['60']
      }
    })}
  }
`;
