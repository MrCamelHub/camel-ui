import styled, { CSSObject } from '@emotion/styled';

import type { CSSValue } from '@types';

import { convertNumberToCSSValue } from '@utils';

import type { AvatarProps } from '.';

export const AvatarWrapper = styled.div<
  Pick<AvatarProps, 'round'> & {
    dataWidth: CSSValue;
    dataHeight: CSSValue;
  }
>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: ${({ dataWidth }) => (dataWidth ? convertNumberToCSSValue(dataWidth) : 'auto')};
  height: ${({ dataHeight }) => (dataHeight ? convertNumberToCSSValue(dataHeight) : 'auto')};

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const StyledAvatar = styled.img<Pick<AvatarProps, 'round'>>`
  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}}
`;
