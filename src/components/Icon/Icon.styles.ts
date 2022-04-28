import styled, { CSSObject } from '@emotion/styled';
import type { HeartFilled } from '../../assets/icons';

import { IconProps } from '.';

export const StyledIcon = (icon: typeof HeartFilled) => styled(icon)<Pick<IconProps, 'color'>>`
  color: ${({ theme: { palette } }) => palette.common.grey['20']};

  ${({ color }): CSSObject =>
    color
      ? {
          color
        }
      : {}};
`;
