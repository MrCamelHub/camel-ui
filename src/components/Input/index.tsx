import React, { forwardRef, useState } from 'react';
import type { InputHTMLAttributes, ReactElement } from 'react';

import { BaseInput, StyledInput } from './Input.styles';
import { GenericComponentProps, Size, Variant } from '../../types';

export interface InputProps
  extends GenericComponentProps<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>> {
  variant?: Exclude<Variant, 'ghost' | 'outlinedGhost'> | 'underline';
  size?: Exclude<Size, 'xsmall'> | 'xxlarge';
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  unit?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    variant = 'outlined',
    size = 'medium',
    startIcon,
    endIcon,
    unit,
    fullWidth,
    customStyle,
    ...props
  },
  ref
) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <StyledInput
      ref={ref}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      focused={focused}
      css={customStyle}
    >
      {startIcon}
      <BaseInput {...props} onFocus={handleFocus} onBlur={handleBlur} />
      {unit}
      {endIcon}
    </StyledInput>
  );
});

export default Input;
