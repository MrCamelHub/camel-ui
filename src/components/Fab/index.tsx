import React, { memo, ButtonHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps } from '../../types';
import { StyledFab, StyledFabInner } from './Fab.styles';

function Fab({
  children,
  componentRef,
  customStyle,
  ...props
}: GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  const { theme } = useTheme();

  return (
    <StyledFab ref={componentRef} theme={theme} css={customStyle} {...props}>
      <StyledFabInner>{children}</StyledFabInner>
    </StyledFab>
  );
}

export default memo(Fab);
