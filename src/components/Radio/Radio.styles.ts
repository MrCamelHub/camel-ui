import styled, { CSSObject } from '@emotion/styled';

import { RadioProps } from '.';

export const Wrapper = styled.div<Pick<RadioProps, 'checked'>>`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid ${({ theme: { palette } }) => palette.common.grey['80']};
  border-radius: 50%;
  background-color: ${({ theme: { palette } }) => palette.common.white};
  cursor: pointer;

  ${({ theme: { palette }, checked }): CSSObject =>
    checked
      ? {
          borderColor: 'transparent',
          backgroundColor: palette.common.grey['20']
        }
      : {}}
`;

export const StyledRadio = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
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
