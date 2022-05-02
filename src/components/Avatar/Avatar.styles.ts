import styled, { CSSObject } from '@emotion/styled';

import { AvatarProps } from '.';

export const StyledAvatar = styled.img<Pick<AvatarProps, 'round'>>`
  display: inline-block;

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
