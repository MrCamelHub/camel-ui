import styled from '@emotion/styled';
import Icon from '@components/Icon';

import { getBrandColorCodeByColorName } from '@utils';

import type { BrandColor } from '../../types';

import type { CheckboxProps } from '.';

export const Wrapper = styled.div<Pick<CheckboxProps, 'checked' | 'brandColor' | 'disabled'>>`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${({ theme: { palette } }) => palette.common.uiWhite};
`;

export const StyledCheckbox = styled.input`
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

export const Marker = styled(Icon)<{
  dataChecked?: boolean;
  dataBrandColor?: BrandColor;
}>`
  vertical-align: inherit;
  color: ${({ theme, dataBrandColor, dataChecked }) =>
    dataChecked ? getBrandColorCodeByColorName(theme, dataBrandColor) : theme.palette.common.ui80};
`;
