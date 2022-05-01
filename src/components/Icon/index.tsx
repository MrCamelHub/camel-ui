import React, { memo, SVGProps } from 'react';
import { useTheme } from '@theme';

import * as SvgIcons from '../../assets/icons';

import { GenericComponentProps, RequireAtOnlyOneColorProps, BrandColor, Size } from '../../types';
import { StyledIcon } from './Icon.styles';

export interface BaseIconProps extends GenericComponentProps<SVGProps<SVGElement>, SVGElement> {
  name: keyof typeof SvgIcons;
  size?: Exclude<Size, 'xsmall' | 'xlarge'>;
}

export type IconProps = RequireAtOnlyOneColorProps<
  BaseIconProps,
  Extract<BrandColor, 'primary-light'>
>;

function Icon({
  ref,
  name,
  size = 'medium',
  viewBox = '0 0 24 24',
  brandColor,
  customColor,
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
      ref={ref}
      theme={theme}
      name={name}
      size={size}
      brandColor={brandColor}
      customColor={customColor}
      viewBox={hasSpecifyViewBox ? newViewBox : viewBox}
      css={customStyle}
      {...props}
    />
  );
}

export default memo(Icon);
