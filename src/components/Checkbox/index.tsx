import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import type { BrandColor, GenericComponentProps } from '@types';
import Icon from '@components/Icon';

import { Marker, StyledCheckbox, Wrapper } from './Checkbox.styles';

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
        <Marker checked={checked} brandColor={brandColor}>
          <Icon name={!checked ? 'CircleOutlined' : 'CheckCircleFilled'} size="medium" />
        </Marker>
      )}
      {!isRound && !hideDefaultCheckMarker && (
        <Marker checked={checked} brandColor={brandColor}>
          <Icon name={!checked ? 'CheckCircleOutlined' : 'CheckCircleFilled'} size="medium" />
        </Marker>
      )}
      {isRound && hideDefaultCheckMarker && (
        <Marker checked={checked} brandColor={brandColor}>
          <Icon name={!checked ? 'CheckboxOutlined' : 'CheckboxCheckedFilled'} size="medium" />
        </Marker>
      )}
      {isRound && !hideDefaultCheckMarker && (
        <Marker checked={checked} brandColor={brandColor}>
          <Icon
            name={!checked ? 'CheckboxCheckedOutlined' : 'CheckboxCheckedFilled'}
            size="medium"
          />
        </Marker>
      )}
    </Wrapper>
  );
});

export default Checkbox;
