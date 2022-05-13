import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes, MouseEvent } from 'react';

import { Circle, StyledSwitch } from './Switch.styles';
import type { GenericComponentProps } from '../../types';

export interface SwitchProps
  extends GenericComponentProps<
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange'>
  > {
  checked?: boolean;
  onChange?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { checked, disabled, onChange, customStyle, ...props },
  ref
) {
  return (
    <StyledSwitch
      ref={ref}
      css={customStyle}
      checked={checked}
      disabled={disabled}
      onClick={!disabled ? onChange : undefined}
      role="switch"
      {...props}
    >
      <Circle checked={checked} />
    </StyledSwitch>
  );
});

export default Switch;
