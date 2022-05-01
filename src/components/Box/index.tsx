import React, { memo, PropsWithChildren, ElementType, HTMLAttributes } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledBox } from './Box.styles';

export interface BoxProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  component?: ElementType;
}

function Box({
  children,
  componentRef,
  component = 'div',
  customStyle
}: PropsWithChildren<BoxProps>) {
  return (
    <StyledBox ref={componentRef} as={component} css={customStyle}>
      {children}
    </StyledBox>
  );
}

export default memo(Box);
