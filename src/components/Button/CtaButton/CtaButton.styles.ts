import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';
import { CtaButtonProps } from '.';

export const StyledCtaButton = styled.button<
  Pick<CtaButtonProps, 'variant' | 'brandColor' | 'customColor' | 'size' | 'fullWidth'>
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  border: 1px solid transparent;
  border-radius: 8px;

  ${({ theme, theme: { palette }, variant, brandColor }): CSSObject => {
    let cssObject: CSSObject;

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
      default:
        cssObject = {
          borderColor: brandColorCode,
          color: brandColorCode,
          '& svg': {
            color: brandColorCode
          }
        };

        if (brandColor === 'common-grey') {
          cssObject = {
            borderColor: palette.common.grey['40'],
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }
        break;
    }

    return cssObject;
  }}

  ${({ theme: { palette }, variant, customColor }): CSSObject => {
    let cssObject: CSSObject;

    switch (variant) {
      case 'contained':
        cssObject = {
          backgroundColor: customColor,
          color: palette.common.white,
          '& svg': {
            color: palette.common.white
          }
        };
        break;
      default:
        cssObject = {
          borderColor: customColor,
          color: customColor,
          '& svg': {
            color: customColor
          }
        };
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
          fontSize: typography.h4.size,
          fontWeight: typography.h4.weight.bold,
          lineHeight: typography.h4.lineHeight,
          letterSpacing: typography.h4.letterSpacing
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
    background-color: ${({ theme: { palette } }) => palette.common.grey['80']};
    color: ${({ theme: { palette } }) => palette.common.grey['60']};
    cursor: default;
    & svg {
      color: ${({ theme: { palette } }) => palette.common.grey['60']};
    }
  }
`;
