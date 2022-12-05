import type { HTMLAttributes, ReactElement } from 'react';
import React, { forwardRef } from 'react';

import { StyledLabel } from './Label.styles';
import type { BrandColor, CSSValue, GenericComponentProps, Size, Variant } from '../../types';

export interface LabelProps extends GenericComponentProps<HTMLAttributes<HTMLLabelElement>> {
  variant?: Exclude<Variant, 'inline'> | 'darked';
  brandColor?: BrandColor;
  size?: Extract<Size, 'small' | 'xsmall'>;
  startIcon?: ReactElement;
  round?: CSSValue;
  text: string | ReactElement;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  {
    variant = 'outline',
    text,
    brandColor = 'primary',
    size = 'small',
    startIcon,
    round = 4,
    customStyle,
    ...props
  },
  ref
) {
  return (
    <StyledLabel
      ref={ref}
      variant={variant}
      brandColor={brandColor}
      size={size}
      round={round}
      css={customStyle}
      {...props}
    >
      {startIcon}
      {text}
    </StyledLabel>
  );
});

export default Label;
