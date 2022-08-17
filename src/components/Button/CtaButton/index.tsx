import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { StyledCtaButton } from './CtaButton.styles';
import type {
  BrandColor,
  GenericComponentProps,
  RequireAtOnlyOneIcon,
  Size,
  Variant
} from '../../../types';
import { TypographyWeight } from '../../../types';

export interface BaseCtaButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: Exclude<Variant, 'outlinedGhost'>;
  brandColor?: Extract<BrandColor, 'black' | 'primary'>;
  size?: Exclude<Size, 'xsmall' | 'small'>;
  weight?: keyof TypographyWeight;
  fullWidth?: boolean;
}

export type CtaButtonProps = RequireAtOnlyOneIcon<BaseCtaButtonProps>;

const CtaButton = forwardRef<HTMLButtonElement, PropsWithChildren<CtaButtonProps>>(
  function CtaButton(
    {
      children,
      variant = 'outlined',
      brandColor = 'black',
      size = 'medium',
      weight = 'medium',
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
        weight={weight}
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
