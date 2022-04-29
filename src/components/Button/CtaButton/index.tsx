import React, { memo, PropsWithChildren, ButtonHTMLAttributes, ReactElement } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps, Variant, ComponentColor, Size } from '../../../types';
import { StyledCtaButton, ButtonInner } from './CtaButton.styles';

export interface CtaButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: Exclude<Size, 'xsmall' | 'small' | 'xlarge'>;
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
        variant?: Exclude<Variant, 'contained'>;
        color?: Exclude<ComponentColor, 'default' | 'black'>;
      }
    | {
        variant?: Exclude<Variant, 'outlined'>;
        color?: Exclude<ComponentColor, 'default' | 'grey'>;
      }
  );

function CtaButton({
  children,
  ref,
  variant = 'outlined',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  iconOnly = false,
  fullWidth,
  customStyle,
  ...props
}: PropsWithChildren<RequireAtOnlyOneIcon<ConditionalSupportColor<CtaButtonProps>>>) {
  const { theme } = useTheme();

  return (
    <StyledCtaButton
      theme={theme}
      ref={ref}
      variant={variant}
      size={size}
      color={color}
      fullWidth={fullWidth}
      css={customStyle}
      {...props}
    >
      <ButtonInner>
        {startIcon}
        {!iconOnly && children}
        {endIcon}
      </ButtonInner>
    </StyledCtaButton>
  );
}

export default memo(CtaButton);
