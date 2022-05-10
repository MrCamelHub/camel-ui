import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import Icon from '@components/Icon';

import { StyledIconButton } from './CircleIconButton.styles';
import type { BrandColor, GenericComponentProps } from '../../../types';
import type * as SvgIcons from '../../../assets/icons';

export interface CircleIconButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  iconName: keyof typeof SvgIcons;
  brandColor?: BrandColor;
}

const CircleIconButton = forwardRef<HTMLButtonElement, CircleIconButtonProps>(
  function CircleIconButton({ iconName, brandColor = 'grey', ...props }, ref) {
    return (
      <StyledIconButton ref={ref} brandColor={brandColor} {...props}>
        <Icon name={iconName} />
      </StyledIconButton>
    );
  }
);

export default CircleIconButton;
