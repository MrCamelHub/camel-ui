import React, { forwardRef, PropsWithChildren, HTMLAttributes } from 'react';
import { useTheme } from '@theme';

import {
  GenericComponentProps,
  TypographyVariant,
  TypographyComponent,
  TypographyWeight,
  BrandColor
} from '../../types';
import { StyledTypography } from './Typography.styles';

export interface TypographyProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  variant?: TypographyVariant;
  component?: TypographyComponent;
  brandColor?: BrandColor;
  weight?: keyof TypographyWeight;
}

const Typography = forwardRef<HTMLDivElement, PropsWithChildren<TypographyProps>>(
  function Typography(
    { children, variant = 'body1', component, weight = 'regular', brandColor, customStyle },
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
        css={customStyle}
      >
        {children}
      </StyledTypography>
    );
  }
);

export default Typography;
