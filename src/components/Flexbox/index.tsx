import React, { ElementType, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import { StyledFlexbox } from './Flexbox.styles';
import type { GenericComponentProps } from '../../types';

export interface FlexboxProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  component?: Extract<ElementType, 'div' | 'section' | 'main' | 'article'>;
  direction?: 'horizontal' | 'vertical';
  alignment?: 'flex-start' | 'flex-end' | 'center';
  justifyContent?: 'center' | 'space-between';
  gap?: number;
}

// #TODO 추후 스펙 개선
const Flexbox = forwardRef<HTMLDivElement, PropsWithChildren<FlexboxProps>>(function Flexbox(
  {
    children,
    component = 'div',
    direction = 'horizontal',
    alignment,
    justifyContent,
    gap,
    customStyle
  },
  ref
) {
  return (
    <StyledFlexbox
      as={component}
      ref={ref}
      layoutDirection={direction}
      alignment={alignment}
      justifyContent={justifyContent}
      gap={gap}
      css={customStyle}
    >
      {children}
    </StyledFlexbox>
  );
});

export default Flexbox;
