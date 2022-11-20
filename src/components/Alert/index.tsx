import type { HTMLAttributes, PropsWithChildren } from 'react';
import React, { forwardRef } from 'react';

import { StyledAlert } from './Alert.styles';
import type { BrandColor, BrandExtendsColor, CSSValue, GenericComponentProps } from '../../types';

export interface AlertProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  round?: CSSValue;
  brandColor?: BrandColor | `${Extract<BrandColor, 'primary'>}-${BrandExtendsColor}`;
}

const Alert = forwardRef<HTMLDivElement, PropsWithChildren<AlertProps>>(function Alert(
  { children, brandColor = 'gray', round, customStyle, ...props },
  ref
) {
  return (
    <StyledAlert ref={ref} round={round} brandColor={brandColor} css={customStyle} {...props}>
      {children}
    </StyledAlert>
  );
});

export default Alert;
