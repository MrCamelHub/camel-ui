import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

import { Marker, StyledCheckbox, Wrapper } from './Checkbox.styles';
import type { BrandColor, GenericComponentProps } from '../../types';

export interface CheckboxProps
  extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>> {
  variant?: 'round' | 'circle';
  brandColor?: Extract<BrandColor, 'primary' | 'black'>;
}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(function Checkbox(
  { variant, checked, brandColor = 'primary', customStyle, disabled, ...props },
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
      {variant === 'circle' ? (
        <Marker
          name={!checked ? 'CheckCircleOutlined' : 'CheckCircleFilled'}
          checked={checked}
          brandColor={brandColor}
        />
      ) : (
        <Marker
          name={!checked ? 'CheckboxOutlined' : 'CheckboxCheckedFilled'}
          checked={checked}
          brandColor={brandColor}
        />
      )}
    </Wrapper>
  );
});

export default Checkbox;
