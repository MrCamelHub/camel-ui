import type { InputHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

import { Marker, StyledRadio, Wrapper } from './Radio.styles';
import type { BrandColor, GenericComponentProps } from '../../types';

export interface RadioProps extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>> {
  brandColor?: Extract<BrandColor, 'primary' | 'black'>;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { checked, brandColor = 'primary', customStyle, ...props },
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
      <Marker
        name={!checked ? 'RadioOutlined' : 'RadioCheckedFilled'}
        size="medium"
        dataChecked={checked}
        dataBrandColor={brandColor}
      />
    </Wrapper>
  );
});

export default Radio;
