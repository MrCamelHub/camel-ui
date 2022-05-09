import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { LabelProps } from '.';

export const StyledLabel = styled.label<Pick<LabelProps, 'variant' | 'round' | 'brandColor'>>`
  display: inline-flex;
  align-items: center;
  padding: 0 4px;
  min-width: 36px;
  height: 19px;
  border: 1px solid transparent;
  border-radius: 4px;

  ${({ theme: { typography } }): CSSObject => ({
    fontSize: typography.small2.size,
    fontWeight: typography.small2.weight.medium,
    lineHeight: typography.small2.lineHeight,
    letterSpacing: typography.small2.letterSpacing
  })}

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
      case 'ghost':
        cssObject = {
          backgroundColor: palette.primary.highlight,
          color: brandColorCode,
          '& svg': {
            color: brandColorCode
          }
        };

        if (brandColor === 'grey') {
          cssObject = {
            backgroundColor: palette.common.grey['90'],
            color: palette.common.grey['40'],
            '& svg': {
              color: palette.common.grey['40']
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
          '& svg': {
            color: brandColorCode
          }
        };
        break;
    }

    return cssObject;
  }};

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
`;
