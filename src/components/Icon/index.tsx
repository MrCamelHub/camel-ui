import React, { memo, SVGProps } from 'react';
import { useTheme } from '@theme';

import * as SvgIcons from '../../assets/icons';

import { GenericComponentProps, BrandColor, Color, Size } from '../../types';
import { StyledIcon } from './Icon.styles';

export interface IconProps extends GenericComponentProps<SVGProps<SVGElement>, SVGElement> {
  name: keyof typeof SvgIcons;
  size?: Exclude<Size, 'xsmall' | 'xlarge'>;
  color?: BrandColor | Color;
}

function Icon({
  componentRef,
  name,
  size,
  viewBox = '0 0 24 24',
  color,
  customStyle,
  ...props
}: IconProps) {
  const { theme } = useTheme();
  const SvgIcon = SvgIcons[name];

  const splitNames = name.split('_');
  const hasSpecifyViewBox = splitNames.length === 3;
  const newViewBox = `0 0 ${splitNames[1]} ${splitNames[2]}`;

  const StyledSvgIcon = StyledIcon(SvgIcon);

  return (
    <StyledSvgIcon
      ref={componentRef}
      theme={theme}
      name={name}
      size={size}
      color={color}
      viewBox={hasSpecifyViewBox ? newViewBox : viewBox}
      css={customStyle}
      {...props}
    />
  );
}

export default memo(Icon);
