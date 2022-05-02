import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';
import { LabelProps } from '.';

export const StyledLabel = styled.div<
  Pick<LabelProps, 'variant' | 'round' | 'brandColor' | 'customColor'>
>`
  display: inline-flex;
  align-items: center;
  padding: 0 6px;
  height: 23px;
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
          backgroundColor: palette.common.white,
          borderColor: customColor,
          '& svg': {
            color: customColor
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
