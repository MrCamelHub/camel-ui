import React, { forwardRef, ButtonHTMLAttributes } from 'react';

import Icon from '@components/Icon';

import type * as SvgIcons from '../../../assets/icons';

import { GenericComponentProps, BrandColor } from '../../../types';
import { StyledIconButton } from './CircleIconButton.styles';

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
