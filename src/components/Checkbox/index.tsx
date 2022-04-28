import React, { memo, InputHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps } from '../../types';
import { Wrapper, StyledCheckbox, Marker } from './Checkbox.styles';

export interface CheckboxProps extends GenericComponentProps<InputHTMLAttributes<HTMLDivElement>> {}

function Checkbox({ checked, onChange, customStyle, ...props }: CheckboxProps) {
  const { theme } = useTheme();

  return (
    <Wrapper theme={theme} checked={checked} css={customStyle} tabIndex={0} role="checkbox">
      <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} {...props} />
      <Marker theme={theme} />
    </Wrapper>
  );
}

export default memo(Checkbox);
