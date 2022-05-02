import React, { PropsWithChildren, ElementType, HTMLAttributes, memo } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledFlexbox } from './Flexbox.styles';

export interface FlexboxProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  component?: Extract<ElementType, 'div' | 'section' | 'main' | 'article'>;
  direction?: 'horizontal' | 'vertical';
  alignment?: 'flex-start' | 'flex-end' | 'center';
  justifyContent?: 'center' | 'space-between';
  gap?: number;
}

// #TODO 추후 개선
function Flexbox({
  children,
  componentRef,
  component = 'div',
  direction = 'horizontal',
  alignment,
  justifyContent,
  gap,
  customStyle
}: PropsWithChildren<FlexboxProps>) {
  return (
    <StyledFlexbox
      as={component}
      ref={componentRef}
      layoutDirection={direction}
      alignment={alignment}
      justifyContent={justifyContent}
      gap={gap}
      css={customStyle}
    >
      {children}
    </StyledFlexbox>
  );
}

export default memo(Flexbox);
