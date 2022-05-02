import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';
import { AlertPropsWithColor } from '.';

export const StyledAlert = styled.div<
  Pick<AlertPropsWithColor, 'brandColor' | 'customColor' | 'round'>
>`
  border-radius: 0 24px 24px 24px;

  ${({ theme, brandColor }): CSSObject => ({
    backgroundColor: getBrandColorCodeByColorName(theme, brandColor)
  })}

  ${({ customColor }) =>
    customColor
      ? {
          backgroundColor: customColor
        }
      : {}}

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
