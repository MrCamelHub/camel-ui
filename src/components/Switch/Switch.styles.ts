import styled, { CSSObject } from '@emotion/styled';

import { SwitchProps } from '.';

export const StyledSwitch = styled.button<Pick<SwitchProps, 'checked' | 'size'>>`
  position: relative;
  border-radius: 15px;
  background-color: ${({ theme: { palette } }) => palette.common.gray.ui80};

  ${({ theme: { palette }, checked }): CSSObject =>
    checked
      ? {
          backgroundColor: palette.primary.main
        }
      : {}};

  ${({ size }) => {
    switch (size) {
      case 'large':
        return {
          width: 46,
          height: 28
        };
      default:
        return {
          width: 40,
          height: 24
        };
    }
  }};
`;

export const Circle = styled.div<Pick<SwitchProps, 'checked' | 'size'>>`
  position: absolute;
  top: 50%;
  left: 2px;
  border-radius: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme: { palette } }) => palette.common.gray.uiWhite};

  ${({ checked }): CSSObject =>
    checked
      ? {
          left: 'auto',
          right: 2
        }
      : {}};

  ${({ size }) => {
    switch (size) {
      case 'large':
        return {
          width: 24,
          height: 24
        };
      default:
        return {
          width: 20,
          height: 20
        };
    }
  }};
`;
