import React, { memo, PropsWithChildren, ReactElement, ButtonHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps, CSSValue, Variant, ComponentColor, Size } from '../../../types';
import { StyledDefaultButton } from './DefaultButton.styles';

export interface DefaultButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: Size;
  round?: CSSValue;
  fullWidth?: boolean;
}

export type RequireAtOnlyOneIcon<T> = T &
  (
    | {
        iconOnly?: boolean;
        startIcon: ReactElement;
        endIcon?: never;
      }
    | {
        iconOnly?: boolean;
        startIcon?: never;
        endIcon: ReactElement;
      }
    | {
        iconOnly?: never;
        startIcon?: ReactElement;
        endIcon?: ReactElement;
      }
  );

export type ConditionalSupportColor<T> = T &
  (
    | {
        variant?: Extract<Variant, 'outlined'>;
        color?: Extract<ComponentColor, 'grey'>;
      }
    | {
        variant?: Extract<Variant, 'contained'>;
        color?: Extract<ComponentColor, 'primary' | 'grey' | 'grey-light'>;
      }
  );

function DefaultButton({
  children,
  ref,
  variant = 'outlined',
  color = 'grey',
  size = 'medium',
  round,
  startIcon,
  endIcon,
  iconOnly = false,
  fullWidth = false,
  customStyle,
  ...props
}: PropsWithChildren<RequireAtOnlyOneIcon<ConditionalSupportColor<DefaultButtonProps>>>) {
  const { theme } = useTheme();

  return (
    <StyledDefaultButton
      ref={ref}
      theme={theme}
      variant={variant}
      color={color}
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
