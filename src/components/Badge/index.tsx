import React, { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import { StyledBadge, Wrapper } from './Badge.styles';
import type { BrandColor, CSSValue, GenericComponentProps, Size, Variant } from '../../types';

export interface BadgeProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  variant?: Exclude<Variant, 'outlineGhost' | 'inline'>;
  size?: Extract<Size, 'small' | 'xsmall'>;
  brandColor?: Exclude<BrandColor, 'gray' | 'white'>;
  text: string | number;
  position?: {
    top?: CSSValue;
    right?: CSSValue;
    left?: CSSValue;
    bottom?: CSSValue;
  };
  disablePositionAbsolute?: boolean;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Badge(
  {
    children,
    open,
    variant = 'outline',
    size = 'small',
    brandColor = 'black',
    text,
    position = {
      top: 0,
      right: 0
    },
    disablePositionAbsolute,
    customStyle,
    ...props
  },
  ref
) {
  if (open && disablePositionAbsolute)
    return (
      <StyledBadge
        open={open}
        variant={variant}
        size={size}
        brandColor={brandColor}
        disablePositionAbsolute
        {...props}
        css={customStyle}
      >
        {text}
      </StyledBadge>
    );

  return (
    <Wrapper ref={ref}>
      {children}
      <StyledBadge
        open={open}
        variant={variant}
        size={size}
        brandColor={brandColor}
        disablePositionAbsolute={disablePositionAbsolute}
        {...position}
        {...props}
        css={customStyle}
      >
        {text}
      </StyledBadge>
    </Wrapper>
  );
});

export default Badge;
