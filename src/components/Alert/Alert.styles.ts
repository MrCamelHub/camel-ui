import { getBrandColorCodeByColorName } from '@utils';
import styled, { CSSObject } from '@emotion/styled';

import type { AlertProps } from '.';

export const StyledAlert = styled.div<Pick<AlertProps, 'brandColor' | 'round'>>`
  border-radius: 0 8px 8px 8px;

  ${({ theme, brandColor }): CSSObject => {
    let brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    if (brandColor === 'gray') {
      brandColorCode = theme.palette.common.ui95;
    }

    return {
      backgroundColor: brandColorCode
    };
  }}

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}}
`;
