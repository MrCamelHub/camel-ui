import React, { forwardRef } from 'react';
import type { HTMLAttributes, MouseEvent } from 'react';

import Radio, { RadioProps } from '@components/Radio';

import { StyledRadioGroup, SubText } from './RadioGroup.styles';
import type { GenericComponentProps, Size } from '../../types';

export interface RadioGroupProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>>,
    Partial<Pick<RadioProps, 'checked' | 'brandColor'>> {
  size?: Exclude<Size, 'xlarge' | 'xsmall'>;
  text: string;
  subText?: string;
  value?: number | string;
  onChange?: (value: number | string | undefined, event: MouseEvent<HTMLDivElement>) => void;
}

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(function CheckboxGroup(
  {
    brandColor = 'primary',
    size = 'medium',
    text,
    subText,
    checked,
    value,
    onChange,
    customStyle,
    ...props
  },
  ref
) {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (onChange && typeof onChange === 'function') onChange(value, event);
  };

  return (
    <StyledRadioGroup ref={ref} size={size} css={customStyle} {...props} onClick={handleClick}>
      <Radio checked={checked} brandColor={brandColor} />
      {text}
      {subText && <SubText>{subText}</SubText>}
    </StyledRadioGroup>
  );
});

export default RadioGroup;
