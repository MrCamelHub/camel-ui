import React, { forwardRef, InputHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps } from '../../types';
import { Wrapper, StyledRadio, Marker } from './Radio.styles';

export interface RadioProps extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>> {}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { checked, customStyle, ...props },
  ref
) {
  const { theme } = useTheme();

  return (
    <Wrapper ref={ref} theme={theme} checked={checked} css={customStyle} tabIndex={0} role="radio">
      <StyledRadio type="radio" checked={checked} {...props} />
      {checked && <Marker theme={theme} />}
    </Wrapper>
  );
});

export default Radio;
