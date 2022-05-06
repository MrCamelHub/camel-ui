import React, { forwardRef, HTMLAttributes } from 'react';
import { useTheme } from '@theme';

import {
  GenericComponentProps,
  RequireAtOnlyOneColorProps,
  Variant,
  BrandColor,
  BoxRoundKey
} from '../../types';
import { StyledLabel } from './Label.styles';

export interface BaseLabelProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  variant?: Variant;
  text: string;
  round?: BoxRoundKey;
}

export type LabelProps = RequireAtOnlyOneColorProps<BaseLabelProps, BrandColor>;

const Label = forwardRef<HTMLDivElement, LabelProps>(function Label(
  { variant = 'outlined', text, round, brandColor = 'primary', customColor, customStyle },
  ref
) {
  const { theme } = useTheme();

  return (
    <StyledLabel
      ref={ref}
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
});

export default Label;
