import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { CtaButtonProps } from '.';

export const StyledCtaButton = styled.button<
  Pick<CtaButtonProps, 'variant' | 'brandColor' | 'size' | 'weight' | 'fullWidth'>
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: fit-content;
  border: 1px solid transparent;
  border-radius: 8px;

  ${({ theme, theme: { palette }, variant, brandColor }): CSSObject => {
    let cssObject: CSSObject = {};

    const brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    switch (variant) {
      case 'contained': {
        cssObject = {
          backgroundColor: brandColorCode,
          color: palette.common.white,
          '& svg': {
            color: palette.common.white
          }
        };
        break;
      }
      case 'ghost': {
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

        break;
      }
      default: {
        cssObject = {
          backgroundColor: palette.common.white,
          borderColor: brandColorCode,
          color: brandColorCode,
          '& > svg': {
            color: brandColorCode
          }
        };

        break;
      }
    }

    return cssObject;
  }}

  ${({ theme: { typography }, size }): CSSObject => {
    switch (size) {
      case 'large': {
        return {
          height: 48,
          padding: '12px 16px',
          fontSize: typography.h4.size,
          fontWeight: typography.h4.weight.bold,
          lineHeight: typography.h4.lineHeight,
          letterSpacing: typography.h4.letterSpacing,
          '& > svg': {
            width: 20,
            height: 20
          }
        };
      }
      default: {
        return {
          height: 41,
          padding: '10px 12px',
          fontSize: typography.body1.size,
          fontWeight: typography.body1.weight.bold,
          lineHeight: typography.body1.lineHeight,
          letterSpacing: typography.body1.letterSpacing,
          '& > svg': {
            width: 18,
            height: 18
          }
        };
      }
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
