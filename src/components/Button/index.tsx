import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { StyledButton } from './Button.styles';
import type {
  BrandColor,
  GenericComponentProps,
  RequireAtOnlyOneIcon,
  Size,
  Variant
} from '../../types';
import { TypographyWeight } from '../../types';

export interface BaseButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: Variant;
  brandColor?: Extract<BrandColor, 'black' | 'primary' | 'grey'>;
  size?: Exclude<Size, 'xsmall'>;
  weight?: keyof TypographyWeight;
  fullWidth?: boolean;
}

export type ButtonProps = RequireAtOnlyOneIcon<BaseButtonProps>;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(function Button(
  {
    children,
    variant = 'outlined',
    brandColor = 'grey',
    size = 'medium',
    weight = 'medium',
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
      weight={weight}
      brandColor={brandColor}
      size={size}
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
