import React, { forwardRef, memo, PropsWithChildren, ElementType, HTMLAttributes } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledBox } from './Box.styles';

export interface BoxProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  component?: ElementType;
}

const Box = forwardRef<HTMLDivElement, PropsWithChildren<BoxProps>>(function Box(
  { children, component = 'div', customStyle },
  ref
) {
  return (
    <StyledBox ref={ref} as={component} css={customStyle}>
      {children}
    </StyledBox>
  );
});

export default memo(Box);
