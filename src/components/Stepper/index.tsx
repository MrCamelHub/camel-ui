import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import type { GenericComponentProps } from '@types';

import { StepperItem, StyledStepper } from './Stepper.styles';

export interface StepperProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  count: number;
  value?: number;
}

const Stepper = forwardRef<HTMLDivElement, StepperProps>(function Stepper(
  { count, value = 0, customStyle, ...props },
  ref
) {
  return (
    <StyledStepper ref={ref} css={customStyle} {...props}>
      {Array.from({ length: count }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <StepperItem key={`stepper-${index}`} active={value === index + 1} />
      ))}
    </StyledStepper>
  );
});

export default Stepper;
