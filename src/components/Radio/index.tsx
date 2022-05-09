import React, { forwardRef, InputHTMLAttributes } from 'react';

import { GenericComponentProps } from '../../types';
import { Wrapper, StyledRadio, Marker } from './Radio.styles';

export interface RadioProps extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>> {}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { checked, customStyle, ...props },
  ref
) {
  return (
    <Wrapper ref={ref} checked={checked} css={customStyle} tabIndex={0} role="radio">
      <StyledRadio type="radio" checked={checked} {...props} />
      {checked && <Marker />}
    </Wrapper>
  );
});

export default Radio;
