import React, { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import { StyledLabel } from './Label.styles';
import type { BrandColor, GenericComponentProps, Size, Variant } from '../../types';

export interface LabelProps extends GenericComponentProps<HTMLAttributes<HTMLLabelElement>> {
  variant?: Variant;
  brandColor?: Extract<BrandColor, 'black' | 'primary' | 'red'>;
  size?: Extract<Size, 'small' | 'xsmall'>;
  text: string;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { variant = 'outlined', text, brandColor = 'primary', size = 'small', customStyle, ...props },
  ref
) {
  return (
    <StyledLabel
      ref={ref}
      variant={variant}
      brandColor={brandColor}
      size={size}
      css={customStyle}
      {...props}
    >
      {text}
    </StyledLabel>
  );
});

export default Label;
