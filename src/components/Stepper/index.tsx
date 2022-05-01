import React, { memo, HTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps } from '../../types';
import { StyledStepper, StepperItem } from './Stepper.styles';

export interface StepperProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  count: number;
  value?: number;
}

function Stepper({ componentRef, count, value = 0, customStyle, ...props }: StepperProps) {
  const { theme } = useTheme();

  return (
    <StyledStepper ref={componentRef} css={customStyle} {...props}>
      {Array.from({ length: count }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <StepperItem key={`stepper-${index}`} theme={theme} active={value === index + 1} />
      ))}
    </StyledStepper>
  );
}

export default memo(Stepper);
