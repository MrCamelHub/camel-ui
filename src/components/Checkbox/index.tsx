import React, { forwardRef, InputHTMLAttributes } from 'react';

import { Wrapper, StyledCheckbox, Marker } from './Checkbox.styles';
import type { GenericComponentProps, BrandColor } from '../../types';

export interface CheckboxProps
  extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>> {
  variant?: 'round' | 'circle';
  brandColor?: Exclude<BrandColor, 'grey'>;
}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(function Checkbox(
  { variant, checked, brandColor = 'black', customStyle, disabled, ...props },
  ref
) {
  return (
    <Wrapper
      ref={ref}
      variant={variant}
      checked={checked}
      brandColor={brandColor}
      css={customStyle}
      disabled={disabled}
      tabIndex={0}
      role="checkbox"
    >
      <StyledCheckbox type="checkbox" checked={checked} disabled={disabled} {...props} />
      <Marker variant={variant} checked={checked} brandColor={brandColor} />
    </Wrapper>
  );
});

export default Checkbox;
