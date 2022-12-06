import styled, { CSSObject } from '@emotion/styled';

import { convertNumberToCSSValue } from '@utils';

import { CSSValue } from '../../types';

import type { AvatarProps } from '.';

export const AvatarWrapper = styled.div<
  Pick<AvatarProps, 'round'> & {
    dataWidth: CSSValue;
    dataHeight: CSSValue;
  }
>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: ${({ dataWidth }) => (dataWidth ? convertNumberToCSSValue(dataWidth) : 'auto')};
  height: ${({ dataHeight }) => (dataHeight ? convertNumberToCSSValue(dataHeight) : 'auto')};
  background-color: ${({
    theme: {
      palette: { common }
    }
  }) => common.ui95};

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const StyledAvatar = styled.img<Pick<AvatarProps, 'round'>>`
  display: inline-block;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}}
`;
