import type { FocusEvent, InputHTMLAttributes, ReactElement } from 'react';
import React, { forwardRef, useState } from 'react';

import { BaseInput, StyledInput, Unit } from './Input.styles';
import { CustomStyle, GenericComponentProps, Size, Variant } from '../../types';

export interface InputProps
  extends GenericComponentProps<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>> {
  variant?: Exclude<Variant, 'ghost' | 'outlineGhost'> | 'underline';
  size?: Exclude<Size, 'xsmall'> | 'xxlarge';
  startAdornment?: string | ReactElement;
  endAdornment?: string | ReactElement;
  unit?: string;
  fullWidth?: boolean;
  inputCustomStyle?: CustomStyle;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    variant = 'outline',
    size = 'medium',
    startAdornment,
    endAdornment,
    unit,
    fullWidth,
    inputCustomStyle,
    customStyle,
    onBlur,
    onFocus,
    disabled,
    ...props
  },
  ref
) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (onFocus && typeof onFocus === 'function') {
      onFocus(event);
    }
    setFocused(true);
  };
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (onBlur && typeof onBlur === 'function') {
      onBlur(event);
    }
    setFocused(false);
  };

  return (
    <StyledInput
      ref={ref}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      focused={focused}
      disabled={disabled}
      css={customStyle}
    >
      {startAdornment}
      <BaseInput
        {...props}
        css={inputCustomStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
      />
      {unit && <Unit>{unit}</Unit>}
      {endAdornment}
    </StyledInput>
  );
});

export default Input;
