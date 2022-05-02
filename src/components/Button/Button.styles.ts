import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';
import { ButtonProps } from '.';

export const StyledDefaultButton = styled.button<
  Pick<ButtonProps, 'variant' | 'brandColor' | 'customColor' | 'size' | 'round' | 'fullWidth'>
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: fit-content;
  border: 1px solid transparent;
  font-weight: 500;
  letter-spacing: -0.2px;

  ${({ theme, theme: { palette }, variant, brandColor }): CSSObject => {
    let cssObject: CSSObject;

    const brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    switch (variant) {
      case 'contained':
        cssObject = {
          backgroundColor: palette.primary.light1,
          color: brandColorCode,
          '& svg': {
            color: brandColorCode
          }
        };

        if (brandColor === 'common-grey') {
          cssObject = {
            backgroundColor: brandColorCode,
            color: palette.common.white,
            '& svg': {
              color: palette.common.white
            }
          };
        }

        if (brandColor === 'common-grey-light') {
          cssObject = {
            backgroundColor: brandColorCode,
            color: palette.common.grey['20'],
            '& svg': {
              color: palette.common.grey['20']
            }
          };
        }

        break;
      default:
        cssObject = {
          backgroundColor: palette.common.white,
          borderColor: palette.common.grey['80'],
          color: palette.common.grey['40'],
          '& > svg': {
            color: palette.common.grey['40']
          }
        };
        break;
    }

    return cssObject;
  }}

  ${({ theme: { palette }, customColor }): CSSObject =>
    customColor
      ? {
          backgroundColor: customColor,
          color: palette.common.white,
          '& svg': {
            color: palette.common.white
          }
        }
      : {}}

  ${({ theme: { typography }, size }): CSSObject => {
    switch (size) {
      case 'xsmall':
        return {
          height: 25,
          padding: '0 8px',
          fontSize: typography.small2.size,
          fontWeight: typography.small2.weight.medium,
          lineHeight: typography.small2.lineHeight,
          letterSpacing: typography.small2.letterSpacing,
          borderRadius: 14
        };
      case 'small':
        return {
          height: 30,
          padding: '0 10px',
          fontSize: typography.body2.size,
          fontWeight: typography.body2.weight.medium,
          lineHeight: typography.body2.lineHeight,
          letterSpacing: typography.body2.letterSpacing,
          borderRadius: 18
        };
      case 'large':
        return {
          height: 45,
          padding: '0 16px',
          fontSize: typography.h3.size,
          fontWeight: typography.h3.weight.medium,
          lineHeight: typography.h3.lineHeight,
          letterSpacing: typography.h3.letterSpacing,
          borderRadius: 23
        };
      case 'xlarge':
        return {
          height: 60,
          padding: '0 22px',
          fontSize: typography.h2.size,
          fontWeight: typography.h2.weight.medium,
          lineHeight: typography.h2.lineHeight,
          letterSpacing: typography.h2.letterSpacing,
          borderRadius: 36
        };
      default:
        return {
          height: 35,
          padding: '0 12px',
          fontSize: typography.body1.size,
          fontWeight: typography.body1.weight.medium,
          lineHeight: typography.body1.lineHeight,
          letterSpacing: typography.body1.letterSpacing,
          borderRadius: 19
        };
    }
  }}

  ${({
    theme: {
      box: { round: boxRound }
    },
    round
  }): CSSObject =>
    round
      ? {
          borderRadius: boxRound[round]
        }
      : {}}
  
  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}}
  
  &:disabled {
    cursor: default;
  }
`;
