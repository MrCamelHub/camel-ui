import styled, { CSSObject } from '@emotion/styled';
import { HeartFilled } from '../../assets/icons';

import { IconProps } from '.';

export const StyledIcon = (icon: typeof HeartFilled) => styled(icon)<
  Pick<IconProps, 'brandColor' | 'customColor' | 'size'>
>`
  color: ${({ theme: { palette } }) => palette.common.grey['20']};

  ${({ brandColor }): CSSObject =>
    brandColor
      ? {
          color: `${brandColor} !important`
        }
      : {}};

  ${({ customColor }): CSSObject =>
    customColor
      ? {
          color: `${customColor} !important`
        }
      : {}};

  ${({ size }): CSSObject => {
    switch (size) {
      case 'small':
        return {
          width: 16,
          height: 16
        };
      case 'large':
        return {
          width: 24,
          height: 24
        };
      default:
        return {
          width: 20,
          height: 20
        };
    }
  }}
`;
