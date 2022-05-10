import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { CircleIconButtonProps } from '.';

export const StyledIconButton = styled.button<Pick<CircleIconButtonProps, 'brandColor'>>`
  display: inline-flex;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 4px;
  border-radius: 50%;

  ${({ theme, brandColor }): CSSObject => ({
    backgroundColor: getBrandColorCodeByColorName(theme, brandColor),
    color: theme.palette.common.white,
    '& svg': {
      color: theme.palette.common.white
    }
  })}
`;
