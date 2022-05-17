import React, { forwardRef } from 'react';
import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react';

import { StyledBox } from './Box.styles';
import type { GenericComponentProps } from '../../types';

export interface BoxProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  component?: ElementType;
}

const Box = forwardRef<HTMLDivElement, PropsWithChildren<BoxProps>>(function Box(
  { children, component = 'div', customStyle, ...props },
  ref
) {
  return (
    <StyledBox ref={ref} as={component} css={customStyle} {...props}>
      {children}
    </StyledBox>
  );
});

export default Box;
