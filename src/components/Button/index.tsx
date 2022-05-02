import React, { memo, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import {
  GenericComponentProps,
  RequireAtOnlyOneIcon,
  RequireAtOnlyOneColorProps,
  Variant,
  BrandColor,
  Size,
  BoxRoundKey
} from '../../types';
import { StyledButton } from './Button.styles';

export interface BaseButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: Size;
  round?: BoxRoundKey;
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

export type ButtonProps = RequireAtOnlyOneIcon<ConditionalSupportColor<BaseButtonProps>>;

function Button({
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
}: PropsWithChildren<ButtonProps>) {
  const { theme } = useTheme();

  return (
    <StyledButton
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
    </StyledButton>
  );
}

export default memo(Button);
