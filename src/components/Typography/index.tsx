import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import { useTheme } from '@theme';

import type {
  BrandColor,
  ComponentColor,
  GenericComponentProps,
  TypographyComponent,
  TypographyVariant,
  TypographyWeight
} from '@types';

import { StyledTypography } from './Typography.styles';

export interface TypographyProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'color'>> {
  variant?: TypographyVariant;
  component?: TypographyComponent;
  brandColor?: BrandColor;
  weight?: keyof TypographyWeight;
  noWrap?: boolean;
  lineClamp?: number;
  textAlign?: 'left' | 'center' | 'right';
  color?: ComponentColor;
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
      textAlign,
      color,
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
        textAlign={textAlign}
        color={color}
        css={customStyle}
        {...props}
      >
        {children}
      </StyledTypography>
    );
  }
);

export default Typography;
