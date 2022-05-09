import React, { forwardRef, InputHTMLAttributes } from 'react';

import { Wrapper, StyledRadio, Marker } from './Radio.styles';
import { GenericComponentProps, BrandColor } from '../../types';

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
