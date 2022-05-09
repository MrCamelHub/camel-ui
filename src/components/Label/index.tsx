import React, { forwardRef, HTMLAttributes } from 'react';

import {
  GenericComponentProps,
  RequireAtOnlyOneColorProps,
  Variant,
  BrandColor,
  BoxRoundKey
} from '../../types';
import { StyledLabel } from './Label.styles';

export interface BaseLabelProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  variant?: Variant;
  text: string;
  round?: BoxRoundKey;
}

export type LabelProps = RequireAtOnlyOneColorProps<BaseLabelProps, BrandColor>;

const Label = forwardRef<HTMLDivElement, LabelProps>(function Label(
  { variant = 'outlined', text, round, brandColor = 'primary', customColor, customStyle },
  ref
) {
  return (
    <StyledLabel
      ref={ref}
      variant={variant}
      round={round}
      brandColor={brandColor}
      customColor={customColor}
      css={customStyle}
    >
      {text}
    </StyledLabel>
  );
});

export default Label;
