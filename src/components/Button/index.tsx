import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import React, { forwardRef } from 'react';

import { StyledButton, SubText } from './Button.styles';
import type {
  BrandColor,
  GenericComponentProps,
  RequireAtOnlyOneIcon,
  Size,
  TypographyWeight,
  Variant
} from '../../types';

export interface BaseButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: Variant;
  brandColor?: Exclude<BrandColor, 'red'>;
  size?: Exclude<Size, 'xsmall'>;
  weight?: keyof TypographyWeight;
  subText?: string | number;
  fullWidth?: boolean;
  disablePadding?: boolean;
}

export type ButtonProps = RequireAtOnlyOneIcon<BaseButtonProps>;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(function Button(
  {
    children,
    variant = 'outline',
    brandColor = 'gray',
    size = 'medium',
    weight = 'medium',
    subText,
    startIcon,
    endIcon,
    iconOnly,
    fullWidth,
    disablePadding,
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
      disablePadding={disablePadding}
      css={customStyle}
      {...props}
    >
      {startIcon}
      {!iconOnly && children}
      {subText && <SubText size={size}>{subText}</SubText>}
      {endIcon}
    </StyledButton>
  );
});

export default Button;
