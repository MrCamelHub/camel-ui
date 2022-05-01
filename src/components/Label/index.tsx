import React, { HTMLAttributes, memo } from 'react';
import { useTheme } from '@theme';

import {
  GenericComponentProps,
  RequireAtOnlyOneColorProps,
  Variant,
  CSSValue,
  BrandColor
} from '../../types';
import { StyledLabel } from './Label.styles';

export interface BaseLabelProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: Variant;
  text: string;
  round?: CSSValue;
}

export type LabelProps = RequireAtOnlyOneColorProps<BaseLabelProps, BrandColor>;

function Label({
  componentRef,
  variant = 'outlined',
  text,
  round,
  brandColor = 'primary',
  customColor,
  customStyle
}: LabelProps) {
  const { theme } = useTheme();

  return (
    <StyledLabel
      ref={componentRef}
      theme={theme}
      variant={variant}
      round={round}
      brandColor={brandColor}
      customColor={customColor}
      css={customStyle}
    >
      {text}
    </StyledLabel>
  );
}

export default memo(Label);
