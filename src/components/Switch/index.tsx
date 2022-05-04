import React, { forwardRef, memo, ButtonHTMLAttributes, MouseEvent } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps } from '../../types';
import { StyledSwitch, Circle } from './Switch.styles';

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
  const { theme } = useTheme();

  return (
    <StyledSwitch
      ref={ref}
      theme={theme}
      css={customStyle}
      checked={checked}
      disabled={disabled}
      onClick={!disabled ? onChange : undefined}
      role="switch"
      {...props}
    >
      <Circle theme={theme} checked={checked} />
    </StyledSwitch>
  );
});

export default memo(Switch);
