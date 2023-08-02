import { forwardRef } from 'react';
import type { HTMLAttributes, MouseEvent } from 'react';

import type { GenericComponentProps, Size } from '@types';
import Checkbox, { CheckboxProps } from '@components/Checkbox';

import { StyledCheckboxGroup, SubText } from './CheckboxGroup.styles';

export interface CheckboxGroupProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>>,
    Partial<Pick<CheckboxProps, 'checked' | 'brandColor' | 'isRound' | 'hideDefaultCheckMarker'>> {
  size?: Exclude<Size, 'xlarge' | 'xsmall'>;
  text: string;
  subText?: string;
  value?: string | number;
  onChange?: (value: string | number | undefined, event: MouseEvent<HTMLDivElement>) => void;
}

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(function CheckboxGroup(
  {
    brandColor = 'primary',
    size = 'medium',
    text,
    subText,
    checked,
    isRound,
    hideDefaultCheckMarker,
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
  const handleChange = () => {
    //
  };

  return (
    <StyledCheckboxGroup ref={ref} size={size} css={customStyle} {...props} onClick={handleClick}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        brandColor={brandColor}
        isRound={isRound}
        hideDefaultCheckMarker={hideDefaultCheckMarker}
      />
      {text}
      {subText && <SubText>{subText}</SubText>}
    </StyledCheckboxGroup>
  );
});

export default CheckboxGroup;
