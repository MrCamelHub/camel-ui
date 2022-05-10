import React, { forwardRef, PropsWithChildren, HTMLAttributes } from 'react';

import { StyledAlert } from './Alert.styles';
import type {
  GenericComponentProps,
  BrandColor,
  BrandExtendsColor,
  BoxRoundKey
} from '../../types';

export interface AlertProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  round?: BoxRoundKey;
  brandColor?: BrandColor | `${Extract<BrandColor, 'primary'>}-${BrandExtendsColor}`;
}

const Alert = forwardRef<HTMLDivElement, PropsWithChildren<AlertProps>>(function Alert(
  { children, brandColor = 'grey', round, customStyle, ...props },
  ref
) {
  return (
    <StyledAlert ref={ref} brandColor={brandColor} round={round} css={customStyle} {...props}>
      {children}
    </StyledAlert>
  );
});

export default Alert;
