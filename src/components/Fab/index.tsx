import type { ButtonHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

import { StyledFab, StyledFabInner } from './Fab.styles';
import type { GenericComponentProps } from '../../types';

export interface FabProps extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {}

const Fab = forwardRef<HTMLButtonElement, FabProps>(function Fab(
  { children, customStyle, ...props },
  ref
) {
  return (
    <StyledFab ref={ref} css={customStyle} {...props}>
      <StyledFabInner>{children}</StyledFabInner>
    </StyledFab>
  );
});

export default Fab;
