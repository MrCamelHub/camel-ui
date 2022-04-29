import styled, { CSSObject } from '@emotion/styled';

import { AvatarProps } from '.';

export const StyledAvatar = styled.img<Pick<AvatarProps, 'round'>>`
  display: inline-block;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}}
`;