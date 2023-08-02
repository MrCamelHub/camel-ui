import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import type { BrandColor, GenericComponentProps } from '@types';
import Icon from '@components/Icon';

import { Marker, StyledRadio, Wrapper } from './Radio.styles';

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
      <Marker checked={checked} brandColor={brandColor}>
        <Icon name={!checked ? 'RadioOutlined' : 'RadioCheckedFilled'} size="medium" />
      </Marker>
    </Wrapper>
  );
});

export default Radio;
