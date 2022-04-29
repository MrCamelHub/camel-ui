import React, { memo, ButtonHTMLAttributes, MouseEvent } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledSwitch, Circle } from './Switch.styles';

export interface SwitchProps
  extends GenericComponentProps<
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange'>,
    HTMLButtonElement
  > {
  checked?: boolean;
  onChange?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Switch({ ref, checked, disabled, onChange, customStyle, ...props }: SwitchProps) {
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
}

export default memo(Switch);
