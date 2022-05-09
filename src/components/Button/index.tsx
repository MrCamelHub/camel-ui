import React, { forwardRef, PropsWithChildren, ButtonHTMLAttributes } from 'react';

import { StyledButton } from './Button.styles';
import {
  GenericComponentProps,
  RequireAtOnlyOneIcon,
  Variant,
  BrandColor,
  Size,
  BoxRoundKey
} from '../../types';

export interface BaseButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant: Variant;
  brandColor?: BrandColor;
  size?: Size;
  round?: BoxRoundKey;
  fullWidth?: boolean;
}

export type ButtonProps = RequireAtOnlyOneIcon<BaseButtonProps>;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(function Button(
  {
    children,
    variant = 'outlined',
    brandColor = 'grey',
    size = 'medium',
    round,
    startIcon,
    endIcon,
    iconOnly = false,
    fullWidth = false,
    customStyle,
    ...props
  },
  ref
) {
  return (
    <StyledButton
      ref={ref}
      variant={variant}
      brandColor={brandColor}
      size={size}
      round={round}
      fullWidth={fullWidth}
      css={customStyle}
      {...props}
    >
      {startIcon}
      {!iconOnly && children}
      {endIcon}
    </StyledButton>
  );
});

export default Button;
