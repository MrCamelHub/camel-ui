import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

import Icon from '@components/Icon';

import { StyledIconButton } from './CircleIconButton.styles';
import type { BrandColor, GenericComponentProps, IconName } from '../../../types';

export interface CircleIconButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  iconName: IconName;
  brandColor?: BrandColor;
}

const CircleIconButton = forwardRef<HTMLButtonElement, CircleIconButtonProps>(
  function CircleIconButton({ iconName, brandColor = 'gray', customStyle, ...props }, ref) {
    return (
      <StyledIconButton ref={ref} brandColor={brandColor} css={customStyle} {...props}>
        <Icon name={iconName} />
      </StyledIconButton>
    );
  }
);

export default CircleIconButton;
