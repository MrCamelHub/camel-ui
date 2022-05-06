import React, { forwardRef, InputHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps } from '../../types';
import { Wrapper, StyledCheckbox, Marker } from './Checkbox.styles';

export interface CheckboxProps extends GenericComponentProps<InputHTMLAttributes<HTMLDivElement>> {}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(function Checkbox(
  { checked, customStyle, ...props },
  ref
) {
  const { theme } = useTheme();

  return (
    <Wrapper
      ref={ref}
      theme={theme}
      checked={checked}
      css={customStyle}
      tabIndex={0}
      role="checkbox"
    >
      <StyledCheckbox type="checkbox" checked={checked} {...props} />
      <Marker theme={theme} />
    </Wrapper>
  );
});

export default Checkbox;
