import type { SVGProps } from 'react';
import { forwardRef } from 'react';

import type { ComponentColor, GenericComponentProps, Size } from '../../types';
import * as SvgIcons from '../../assets/icons';
import { StyledIcon } from './Icon.styles';

export interface IconProps
  extends GenericComponentProps<
    Omit<SVGProps<SVGElement>, 'color' | 'onResize' | 'onResizeCapture'>
  > {
  name: keyof typeof SvgIcons;
  size?: Exclude<Size, 'xsmall' | 'xlarge'>;
  color?: ComponentColor;
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
