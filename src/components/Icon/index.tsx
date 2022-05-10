import React, { SVGProps, forwardRef } from 'react';

import { StyledIcon } from './Icon.styles';
import type {
  BrandColor,
  BrandExtendsColor,
  Color,
  GenericComponentProps,
  Size
} from '../../types';
import * as SvgIcons from '../../assets/icons';

export interface IconProps extends GenericComponentProps<SVGProps<SVGElement>> {
  name: keyof typeof SvgIcons;
  size?: Exclude<Size, 'xsmall' | 'xlarge'>;
  color?: BrandColor | `${Extract<BrandColor, 'primary'>}-${BrandExtendsColor}` | Color;
}

const Icon = forwardRef<SVGElement, IconProps>(function Icon(
  { name, size, viewBox = '0 0 24 24', color, customStyle, ...props },
  ref
) {
  const SvgIcon = SvgIcons[name];

  const splitNames = name.split('_');
  const hasSpecifyViewBox = splitNames.length === 3;
  const newViewBox = `0 0 ${splitNames[1]} ${splitNames[2]}`;

  const StyledSvgIcon = StyledIcon(SvgIcon);

  return (
    <StyledSvgIcon
      ref={ref}
      name={name}
      size={size}
      color={color}
      viewBox={hasSpecifyViewBox ? newViewBox : viewBox}
      css={customStyle}
      {...props}
    />
  );
});

export default Icon;
