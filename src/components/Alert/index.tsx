import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import type { BrandColor, CSSValue, GenericComponentProps } from '@types';

import { StyledAlert } from './Alert.styles';

export interface AlertProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  round?: CSSValue;
  brandColor?: BrandColor;
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
