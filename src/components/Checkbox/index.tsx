import React, { forwardRef, InputHTMLAttributes } from 'react';

import { GenericComponentProps } from '../../types';
import { Wrapper, StyledCheckbox, Marker } from './Checkbox.styles';

export interface CheckboxProps
  extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>> {}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(function Checkbox(
  { checked, customStyle, ...props },
  ref
) {
  return (
    <Wrapper ref={ref} checked={checked} css={customStyle} tabIndex={0} role="checkbox">
      <StyledCheckbox type="checkbox" checked={checked} {...props} />
      <Marker />
    </Wrapper>
  );
});

export default Checkbox;
