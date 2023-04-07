import type { ButtonHTMLAttributes, MouseEvent } from 'react';
import React, { forwardRef } from 'react';

import type { GenericComponentProps, Size } from '../../types';
import { Circle, StyledSwitch } from './Switch.styles';

export interface SwitchProps
  extends GenericComponentProps<
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange'>
  > {
  size?: Extract<Size, 'medium' | 'large'>;
  checked?: boolean;
  onChange?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { size = 'medium', checked, disabled, onChange, customStyle, ...props },
  ref
) {
  return (
    <StyledSwitch
      ref={ref}
      css={customStyle}
      size={size}
      checked={checked}
      disabled={disabled}
      onClick={!disabled ? onChange : undefined}
      role="switch"
      {...props}
    >
      <Circle size={size} checked={checked} />
    </StyledSwitch>
  );
});

export default Switch;
