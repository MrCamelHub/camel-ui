import React, { forwardRef, HTMLAttributes } from 'react';

import {
  GenericComponentProps,
  Variant,
  BrandColor,
  BrandExtendsColor,
  BoxRoundKey
} from '../../types';
import { StyledLabel } from './Label.styles';

export interface LabelProps extends GenericComponentProps<HTMLAttributes<HTMLLabelElement>> {
  variant?: Variant;
  brandColor?:
    | BrandColor
    | `${Extract<BrandColor, 'primary'>}-${Extract<BrandExtendsColor, 'dark'>}`;
  text: string;
  round?: BoxRoundKey;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { variant = 'outlined', text, round, brandColor = 'grey', customStyle },
  ref
) {
  return (
    <StyledLabel
      ref={ref}
      variant={variant}
      round={round}
      brandColor={brandColor}
      css={customStyle}
    >
      {text}
    </StyledLabel>
  );
});

export default Label;
