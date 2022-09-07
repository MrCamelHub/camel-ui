import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { AlertProps } from '.';

export const StyledAlert = styled.div<Pick<AlertProps, 'brandColor' | 'round'>>`
  border-radius: 0 24px 24px 24px;

  ${({ theme, brandColor }): CSSObject => {
    let brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    if (brandColor === 'gray') {
      brandColorCode = theme.palette.common.gray.ui95;
    }

    return {
      backgroundColor: brandColorCode
    };
  }}

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
