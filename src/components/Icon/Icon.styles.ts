import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { HeartFilled } from '../../assets/icons';

import { IconProps } from '.';

export const StyledIcon = (icon: typeof HeartFilled) => styled(icon)<
  Pick<IconProps, 'color' | 'size'>
>`
  color: ${({ theme: { palette } }) => palette.common.ui20};

  ${({ theme, color }): CSSObject => {
    let cssObject: CSSObject = {};

    if (color) {
      const brandColorCode = getBrandColorCodeByColorName(theme, color, false);

      if (brandColorCode) {
        cssObject = { color: `${brandColorCode} !important` };
      } else {
        cssObject = { color: `${color} !important` };
      }
    }

    return cssObject;
  }};

  ${({ size }): CSSObject => {
    switch (size) {
      case 'small':
        return {
          width: 16,
          height: 16
        };
      case 'medium':
        return {
          width: 20,
          height: 20
        };
      case 'large':
        return {
          width: 24,
          height: 24
        };
      default:
        return {};
    }
  }}
`;
