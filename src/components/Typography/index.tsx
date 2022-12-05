import type { HTMLAttributes, PropsWithChildren } from 'react';
import React, { forwardRef } from 'react';

import { useTheme } from '@theme';

import { StyledTypography } from './Typography.styles';
import type {
  BrandColor,
  GenericComponentProps,
  TypographyComponent,
  TypographyVariant,
  TypographyWeight
} from '../../types';

export interface TypographyProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  variant?: TypographyVariant;
  component?: TypographyComponent;
  brandColor?: BrandColor;
  weight?: keyof TypographyWeight;
  noWrap?: boolean;
  lineClamp?: number;
}

const Typography = forwardRef<HTMLDivElement, PropsWithChildren<TypographyProps>>(
  function Typography(
    {
      children,
      variant = 'body1',
      component,
      weight = 'regular',
      brandColor,
      noWrap,
      lineClamp,
      customStyle,
      ...props
    },
    ref
  ) {
    const {
      theme: { typography }
    } = useTheme();

    return (
      <StyledTypography
        ref={ref}
        variant={variant}
        as={component || typography[variant].component}
        weight={weight}
        brandColor={brandColor}
        noWrap={noWrap}
        lineClamp={lineClamp}
        css={customStyle}
        {...props}
      >
        {children}
      </StyledTypography>
    );
  }
);

export default Typography;
