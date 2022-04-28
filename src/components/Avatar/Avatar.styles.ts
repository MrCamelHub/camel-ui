import styled, { CSSObject } from '@emotion/styled';

import { AvatarProps } from '.';

export const StyledAvatar = styled.img<Pick<AvatarProps, 'variant'>>`
  display: inline-block;

  ${({ variant }): CSSObject => {
    switch (variant) {
      case 'square':
        return {
          borderRadius: 0
        };
      case 'circle':
        return {
          borderRadius: '50%'
        };
      default:
        return {
          borderRadius: 4
        };
    }
  }}
`;
