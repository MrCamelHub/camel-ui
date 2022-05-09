import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';
import { ButtonProps } from '.';

export const StyledButton = styled.button<
  Pick<ButtonProps, 'variant' | 'brandColor' | 'size' | 'round' | 'fullWidth'>
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: fit-content;
  border: 1px solid transparent;

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
