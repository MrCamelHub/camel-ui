import type { InputHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

import { Marker, StyledCheckbox, Wrapper } from './Checkbox.styles';
import type { BrandColor, GenericComponentProps } from '../../types';

export interface CheckboxProps
  extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>> {
  brandColor?: Extract<BrandColor, 'primary' | 'black'>;
  isRound?: boolean;
  hideDefaultCheckMarker?: boolean;
}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(function Checkbox(
  {
    checked,
    brandColor = 'primary',
    isRound = true,
    hideDefaultCheckMarker = true,
    customStyle,
    disabled,
    ...props
  },
  ref
) {
  return (
    <Wrapper
      ref={ref}
      checked={checked}
      brandColor={brandColor}
      css={customStyle}
      disabled={disabled}
      tabIndex={0}
      role="checkbox"
    >
      <StyledCheckbox type="checkbox" checked={checked} disabled={disabled} {...props} />
      {!isRound && hideDefaultCheckMarker && (
        <Marker
          name={!checked ? 'CircleOutlined' : 'CheckCircleFilled'}
          size="medium"
          checked={checked}
          brandColor={brandColor}
        />
      )}
      {!isRound && !hideDefaultCheckMarker && (
        <Marker
          name={!checked ? 'CheckCircleOutlined' : 'CheckCircleFilled'}
          size="medium"
          checked={checked}
          brandColor={brandColor}
        />
      )}
      {isRound && hideDefaultCheckMarker && (
        <Marker
          name={!checked ? 'CheckboxOutlined' : 'CheckboxCheckedFilled'}
          size="medium"
          checked={checked}
          brandColor={brandColor}
        />
      )}
      {isRound && !hideDefaultCheckMarker && (
        <Marker
          name={!checked ? 'CheckboxCheckedOutlined' : 'CheckboxCheckedFilled'}
          size="medium"
          checked={checked}
          brandColor={brandColor}
        />
      )}
    </Wrapper>
  );
});

export default Checkbox;
