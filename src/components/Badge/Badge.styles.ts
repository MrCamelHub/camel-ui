import styled, { CSSObject } from '@emotion/styled';

import type { CSSValue } from '@types';

import { getBrandColorCodeByColorName } from '@utils';

import type { BadgeProps } from '.';

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const StyledBadge = styled.div<
  Pick<BadgeProps, 'open' | 'variant' | 'size' | 'brandColor' | 'disablePositionAbsolute'> & {
    top?: CSSValue;
    left?: CSSValue;
    right?: CSSValue;
    bottom?: CSSValue;
  }
>`
  display: flex;
  align-items: center;

  ${({ open }): CSSObject =>
    open
      ? {
          opacity: 1
        }
      : {
          opacity: 0,
          pointerEvents: 'none'
        }};

  transition: opacity 0.2s;

  ${({ disablePositionAbsolute, top, left, right, bottom }): CSSObject =>
    !disablePositionAbsolute
      ? {
          position: 'absolute',
          top,
          left,
          right,
          bottom
        }
      : {}};

  border: 1px solid transparent;

  ${({
    theme,
    theme: {
      palette: { primary, secondary, common }
    },
    variant,
    brandColor
  }): CSSObject => {
    let cssObject: CSSObject;

    const brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    switch (variant) {
      case 'ghost':
        if (brandColor === 'black') {
          cssObject = {
            backgroundColor: common.ui90,
            color: brandColorCode
          };
        } else if (brandColor === 'primary' || brandColor === 'blue') {
          cssObject = {
            backgroundColor: primary.highlight,
            color: brandColorCode
          };
        } else if (brandColor === 'red') {
          cssObject = {
            backgroundColor: secondary.red.highlight,
            color: brandColorCode
          };
        } else {
          cssObject = {
            backgroundColor: primary.highlight,
            color: brandColorCode
          };
        }
        break;
      case 'solid':
        cssObject = {
          backgroundColor: brandColorCode,
          color: common.uiWhite
        };
        break;
      default:
        cssObject = {
          backgroundColor: common.uiWhite,
          borderColor: brandColorCode,
          color: brandColorCode
        };
        break;
    }

    return cssObject;
  }};

  ${({
    theme: {
      typography: { body2, small2 }
    },
    size
  }): CSSObject => {
    switch (size) {
      case 'xsmall':
        return {
          minWidth: 16,
          padding: '2px 4px',
          borderRadius: 9,
          fontSize: small2.size,
          fontWeight: small2.weight.medium,
          lineHeight: small2.lineHeight,
          letterSpacing: small2.letterSpacing
        };
      default:
        return {
          minWidth: 20,
          padding: '2px 6px',
          borderRadius: 12,
          fontSize: body2.size,
          fontWeight: body2.weight.medium,
          lineHeight: body2.lineHeight,
          letterSpacing: body2.letterSpacing
        };
    }
  }}
`;
