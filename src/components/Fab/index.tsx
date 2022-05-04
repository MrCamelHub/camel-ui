import React, { forwardRef, memo, ButtonHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps } from '../../types';
import { StyledFab, StyledFabInner } from './Fab.styles';

export interface FabProps extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {}

const Fab = forwardRef<HTMLButtonElement, FabProps>(function Fab(
  { children, customStyle, ...props },
  ref
) {
  const { theme } = useTheme();

  return (
    <StyledFab ref={ref} theme={theme} css={customStyle} {...props}>
      <StyledFabInner>{children}</StyledFabInner>
    </StyledFab>
  );
});

export default memo(Fab);
