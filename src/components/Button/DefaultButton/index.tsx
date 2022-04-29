import React, { memo, PropsWithChildren, ReactElement, ButtonHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps, CSSValue, Size } from '../../../types';
import { StyledDefaultButton, ButtonInner } from './DefaultButton.styles';

export interface DefaultButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'default' | 'tertiary' | 'primary' | 'quaternary';
  size?: Size;
  round?: CSSValue;
  fullWidth?: boolean;
}

type RequireAtOnlyOneIcon<T> = T &
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

function DefaultButton({
  children,
  ref,
  variant = 'default',
  size = 'medium',
  round,
  startIcon,
  endIcon,
  iconOnly = false,
  fullWidth = false,
  customStyle,
  ...props
}: PropsWithChildren<RequireAtOnlyOneIcon<DefaultButtonProps>>) {
  const { theme } = useTheme();

  return (
    <StyledDefaultButton
      ref={ref}
      theme={theme}
      variant={variant}
      size={size}
      round={round}
      fullWidth={fullWidth}
      css={customStyle}
      {...props}
    >
      <ButtonInner>
        {startIcon}
        {!iconOnly && children}
        {endIcon}
      </ButtonInner>
    </StyledDefaultButton>
  );
}

export default memo(DefaultButton);
