import React, { forwardRef, memo, PropsWithChildren, HTMLAttributes } from 'react';
import { useTheme } from '@theme';

import {
  GenericComponentProps,
  RequireAtOnlyOneColorProps,
  TypographyVariant,
  TypographyComponent,
  TypographyWeight,
  BrandColor
} from '../../types';
import { StyledTypography } from './Typography.styles';

export interface BaseTypographyProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  variant?: TypographyVariant;
  component?: TypographyComponent;
  weight?: keyof TypographyWeight;
}

export type TypographyProps = RequireAtOnlyOneColorProps<BaseTypographyProps, BrandColor>;

const Typography = forwardRef<HTMLDivElement, PropsWithChildren<TypographyProps>>(
  function Typography(
    {
      children,
      variant = 'body1',
      component,
      weight = 'regular',
      brandColor,
      customColor,
      customStyle
    },
    ref
  ) {
    const { theme } = useTheme();

    return (
      <StyledTypography
        ref={ref}
        theme={theme}
        variant={variant}
        as={component || theme.typography[variant].component}
        weight={weight}
        brandColor={brandColor}
        customColor={customColor}
        css={customStyle}
      >
        {children}
      </StyledTypography>
    );
  }
);

export default memo(Typography);
