import type { HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

import { StyledLabel } from './Label.styles';
import type { BrandColor, GenericComponentProps, Size, Variant } from '../../types';
import { BrandExtendsColor } from '../../types';

export interface LabelProps extends GenericComponentProps<HTMLAttributes<HTMLLabelElement>> {
  variant?: Exclude<Variant, 'inline'> | 'darked';
  brandColor?:
    | Extract<BrandColor, 'black' | 'primary' | 'red'>
    | `${Extract<BrandColor, 'primary'>}-${Extract<BrandExtendsColor, 'light'>}`;
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
