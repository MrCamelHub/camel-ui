import React, { memo, InputHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps } from '../../types';
import { Wrapper, StyledRadio, Marker } from './Radio.styles';

export interface RadioProps extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>> {}

function Radio({ checked, onChange, customStyle, ...props }: RadioProps) {
  const { theme } = useTheme();

  return (
    <Wrapper theme={theme} checked={checked} css={customStyle} tabIndex={0} role="radio">
      <StyledRadio type="radio" checked={checked} onChange={onChange} {...props} />
      {checked && <Marker theme={theme} />}
    </Wrapper>
  );
}

export default memo(Radio);
