import styled, { CSSObject } from '@emotion/styled';

import { AlertProps } from '.';

export const StyledAlert = styled.div<Pick<AlertProps, 'color' | 'round'>>`
  border-radius: 0 24px 24px 24px;

  ${({ theme: { palette }, color }): CSSObject => {
    switch (color) {
      case 'primary-light2':
        return {
          backgroundColor: palette.primary.light2
        };
      case 'grey-light':
        return {
          backgroundColor: palette.common.grey['98']
        };
      default:
        return {
          backgroundColor: palette.primary.light1
        };
    }
  }}

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;
