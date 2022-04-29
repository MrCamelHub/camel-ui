import React, { memo, PropsWithChildren, ElementType, HTMLAttributes } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledBox } from './Box.styles';

export interface BoxProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  component?: ElementType;
}

function Box({ children, ref, component = 'div', customStyle }: PropsWithChildren<BoxProps>) {
  return (
    <StyledBox ref={ref} as={component} css={customStyle}>
      {children}
    </StyledBox>
  );
}

export default memo(Box);
