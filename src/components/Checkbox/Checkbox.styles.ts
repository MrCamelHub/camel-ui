import styled, { CSSObject } from '@emotion/styled';
import { CheckboxProps } from '.';

export const Wrapper = styled.div<Pick<CheckboxProps, 'checked'>>`
  position: relative;
  width: 24px;
  height: 24px;
  border: 1px solid ${({ theme: { palette } }) => palette.common.grey['80']};
  border-radius: 4px;
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

export const StyledCheckbox = styled.input`
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
    width: 8px;
    height: 10px;
    transform: translate(-50%, calc(-50% - 2px)) rotate(45deg);
    border: solid;
    border-width: 0 2px 2px 0;
    border-color: ${({ theme: { palette } }) => palette.common.white};
  }
`;
