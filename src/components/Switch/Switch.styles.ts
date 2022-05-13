import styled, { CSSObject } from '@emotion/styled';

import { SwitchProps } from '.';

export const StyledSwitch = styled.button<Pick<SwitchProps, 'checked'>>`
  position: relative;
  width: 50px;
  height: 30px;
  border-radius: 15px;
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
  top: 50%;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme: { palette } }) => palette.common.white};

  ${({ checked }): CSSObject =>
    checked
      ? {
          left: 'auto',
          right: 2
        }
      : {}};
`;
