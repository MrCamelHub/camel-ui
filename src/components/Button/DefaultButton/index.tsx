import React, { memo, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import {
  GenericComponentProps,
  RequireAtOnlyOneIcon,
  RequireAtOnlyOneColorProps,
  CSSValue,
  Variant,
  BrandColor,
  Size
} from '../../../types';
import { StyledDefaultButton } from './DefaultButton.styles';

export interface BaseDefaultButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: Size;
  round?: CSSValue;
  fullWidth?: boolean;
}

export type ConditionalSupportColor<T> = T &
  (
    | RequireAtOnlyOneColorProps<
        {
          variant?: Extract<Variant, 'outlined'>;
        },
        Extract<BrandColor, 'common-grey'>
      >
    | RequireAtOnlyOneColorProps<
        {
          variant?: Extract<Variant, 'contained'>;
        },
        Extract<BrandColor, 'primary' | 'common-grey' | 'common-grey-light'>
      >
  );

export type DefaultButtonProps = RequireAtOnlyOneIcon<
  ConditionalSupportColor<BaseDefaultButtonProps>
>;

function DefaultButton({
  children,
  componentRef,
  variant = 'outlined',
  brandColor = 'common-grey',
  customColor,
  size = 'medium',
  round,
  startIcon,
  endIcon,
  iconOnly = false,
  fullWidth = false,
  customStyle,
  ...props
}: PropsWithChildren<DefaultButtonProps>) {
  const { theme } = useTheme();

  return (
    <StyledDefaultButton
      ref={componentRef}
      theme={theme}
      variant={variant}
      brandColor={brandColor}
      customColor={customColor}
      size={size}
      round={round}
      fullWidth={fullWidth}
      css={customStyle}
      {...props}
    >
      {startIcon}
      {!iconOnly && children}
      {endIcon}
    </StyledDefaultButton>
  );
}

export default memo(DefaultButton);
