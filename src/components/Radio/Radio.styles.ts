import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';
import { RadioProps } from '.';

export const Wrapper = styled.div<Pick<RadioProps, 'checked' | 'brandColor'>>`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme: { palette } }) => palette.common.white};
  cursor: pointer;

  ${({ theme, brandColor }): CSSObject => {
    if (brandColor === 'black') {
      return {
        border: `1px solid ${theme.palette.common.grey['60']}`
      };
    }

    return {
      border: `1px solid ${getBrandColorCodeByColorName(theme, brandColor)}`
    };
  }}

  ${({ theme, brandColor, checked }): CSSObject =>
    checked
      ? {
          borderColor: 'transparent',
          backgroundColor: getBrandColorCodeByColorName(theme, brandColor)
        }
      : {}}
`;

export const StyledRadio = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

export const Marker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme: { palette } }) => palette.common.white};
  }
`;
