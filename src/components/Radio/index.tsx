import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

import { Marker, StyledRadio, Wrapper } from './Radio.styles';
import type { BrandColor, GenericComponentProps } from '../../types';

export interface RadioProps extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>> {
  brandColor?: Exclude<BrandColor, 'grey'>;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { checked, brandColor = 'black', customStyle, ...props },
  ref
) {
  return (
    <Wrapper
      ref={ref}
      checked={checked}
      brandColor={brandColor}
      css={customStyle}
      tabIndex={0}
      role="radio"
    >
      <StyledRadio type="radio" checked={checked} {...props} />
      {checked && <Marker />}
    </Wrapper>
  );
});

export default Radio;
