import React, { forwardRef, memo, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import {
  GenericComponentProps,
  RequireAtOnlyOneIcon,
  RequireAtOnlyOneColorProps,
  Variant,
  BrandColor,
  Size
} from '../../../types';
import { StyledCtaButton } from './CtaButton.styles';

export interface BaseCtaButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  size?: Exclude<Size, 'xsmall' | 'small' | 'xlarge'>;
  fullWidth?: boolean;
}

export type ConditionalSupportColor<T> = T &
  (
    | RequireAtOnlyOneColorProps<
        {
          variant?: Extract<Variant, 'outlined'>;
        },
        Extract<BrandColor, 'primary' | 'common-grey'>
      >
    | RequireAtOnlyOneColorProps<
        {
          variant?: Extract<Variant, 'contained'>;
        },
        Extract<BrandColor, 'primary' | 'common-black'>
      >
  );

export type CtaButtonProps = RequireAtOnlyOneIcon<ConditionalSupportColor<BaseCtaButtonProps>>;

const CtaButton = forwardRef<HTMLButtonElement, PropsWithChildren<CtaButtonProps>>(
  function CtaButton(
    {
      children,
      variant = 'outlined',
      brandColor = 'primary',
      customColor,
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
    const { theme } = useTheme();

    return (
      <StyledCtaButton
        theme={theme}
        ref={ref}
        variant={variant}
        size={size}
        brandColor={brandColor}
        customColor={customColor}
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

export default memo(CtaButton);
