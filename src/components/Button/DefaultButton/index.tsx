import React, { memo, PropsWithChildren, ReactElement, ButtonHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps, CSSValue, Size } from '../../../types';
import { StyledDefaultButton, ButtonInner } from './DefaultButton.styles';

export interface DefaultButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: 'default' | 'tertiary' | 'primary' | 'quaternary';
  size?: Size;
  round?: CSSValue;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  fullWidth?: boolean;
}

function DefaultButton({
  children,
  variant = 'default',
  size = 'medium',
  round,
  startIcon,
  endIcon,
  fullWidth = false,
  customStyle,
  ...props
}: PropsWithChildren<DefaultButtonProps>) {
  const { theme } = useTheme();

  return (
    <StyledDefaultButton
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
        {children}
        {endIcon}
      </ButtonInner>
    </StyledDefaultButton>
  );
}

export default memo(DefaultButton);
