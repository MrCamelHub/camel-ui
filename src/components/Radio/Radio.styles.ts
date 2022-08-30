import styled from '@emotion/styled';
import Icon from '@components/Icon';

import { getBrandColorCodeByColorName } from '@utils';

import { RadioProps } from '.';

export const Wrapper = styled.div<Pick<RadioProps, 'checked' | 'brandColor'>>`
  position: relative;
  display: inline-block;
  cursor: pointer;
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

export const Marker = styled(Icon)<Pick<RadioProps, 'checked' | 'brandColor'>>`
  color: ${({ theme, brandColor, checked }) =>
    checked ? getBrandColorCodeByColorName(theme, brandColor) : theme.palette.common.gray.ui80};
`;
