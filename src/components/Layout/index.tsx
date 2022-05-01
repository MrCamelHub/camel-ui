import React, { PropsWithChildren, ElementType, HTMLAttributes, memo } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledLayout } from './Layout.styles';

export interface LayoutProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  component?: Extract<ElementType, 'div' | 'section' | 'main' | 'article'>;
  direction?: 'horizontal' | 'vertical';
  alignment?: 'flex-start' | 'flex-end' | 'center';
  justifyContent?: 'center' | 'space-between';
  gap?: number;
}

// #TODO 추후 개선
function Layout({
  children,
  componentRef,
  component = 'div',
  direction = 'horizontal',
  alignment,
  justifyContent,
  gap,
  customStyle
}: PropsWithChildren<LayoutProps>) {
  return (
    <StyledLayout
      as={component}
      ref={componentRef}
      layoutDirection={direction}
      alignment={alignment}
      justifyContent={justifyContent}
      gap={gap}
      css={customStyle}
    >
      {children}
    </StyledLayout>
  );
}

export default memo(Layout);
