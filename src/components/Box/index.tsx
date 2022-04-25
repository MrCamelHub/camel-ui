import React, { memo, PropsWithChildren, ElementType, HTMLAttributes } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledBox } from './Box.styles';

export interface BoxProps extends GenericComponentProps<HTMLAttributes<HTMLElement>> {
  component?: ElementType;
}

function Box({ children, component = 'div', customStyle }: PropsWithChildren<BoxProps>) {
  return (
    <StyledBox as={component} css={customStyle}>
      {children}
    </StyledBox>
  );
}

export default memo(Box);
