import styled, { CSSObject } from '@emotion/styled';

import { SwitchProps } from '.';

export const StyledSwitch = styled.button<Pick<SwitchProps, 'checked'>>`
  position: relative;
  width: 50px;
  height: 30px;
  border-radius: 15px;
  box-sizing: content-box;
  background-color: ${({ theme: { palette } }) => palette.common.grey['80']};
  border: 1px solid transparent;

  ${({ theme: { palette }, checked }): CSSObject =>
    checked
      ? {
          backgroundColor: palette.primary.main
        }
      : {}};
`;

export const Circle = styled.div<Pick<SwitchProps, 'checked'>>`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${({ theme: { palette } }) => palette.common.white};

  ${({ checked }): CSSObject =>
    checked
      ? {
          left: 'auto',
          right: 2
        }
      : {}};
`;
