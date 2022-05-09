import React, { forwardRef, PropsWithChildren, ButtonHTMLAttributes } from 'react';

import {
  GenericComponentProps,
  RequireAtOnlyOneIcon,
  Variant,
  BrandColor,
  Size
} from '../../../types';
import { StyledCtaButton } from './CtaButton.styles';

export interface BaseCtaButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: Variant;
  brandColor?: BrandColor;
  size?: Exclude<Size, 'xsmall' | 'small' | 'xlarge'>;
  fullWidth?: boolean;
}

export type CtaButtonProps = RequireAtOnlyOneIcon<BaseCtaButtonProps>;

const CtaButton = forwardRef<HTMLButtonElement, PropsWithChildren<CtaButtonProps>>(
  function CtaButton(
    {
      children,
      variant = 'outlined',
      brandColor = 'grey',
      size = 'medium',
      startIcon,
      endIcon,
      iconOnly = false,
      fullWidth,
      customStyle,
      ...props
    },
    ref
  ) {
    return (
      <StyledCtaButton
        ref={ref}
        variant={variant}
        size={size}
        brandColor={brandColor}
        fullWidth={fullWidth}
        css={customStyle}
        {...props}
      >
        {startIcon}
        {!iconOnly && children}
        {endIcon}
      </StyledCtaButton>
    );
  }
);

export default CtaButton;
