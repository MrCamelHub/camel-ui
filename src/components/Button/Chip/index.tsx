import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { StyledChip } from './Chip.styles';
import type {
  BrandColor,
  GenericComponentProps,
  RequireAtOnlyOneIcon,
  Size,
  Variant
} from '../../../types';
import { TypographyWeight } from '../../../types';

export interface BaseChipProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: Variant;
  brandColor?: Extract<BrandColor, 'black' | 'primary' | 'grey'>;
  size?: Exclude<Size, 'xsmall'>;
  weight?: keyof TypographyWeight;
  isRound?: boolean;
  fullWidth?: boolean;
}

export type ChipProps = RequireAtOnlyOneIcon<BaseChipProps>;

const Chip = forwardRef<HTMLButtonElement, PropsWithChildren<ChipProps>>(function Button(
  {
    children,
    variant = 'outlined',
    brandColor = 'grey',
    size = 'medium',
    weight = 'regular',
    isRound = true,
    startIcon,
    endIcon,
    iconOnly = false,
    fullWidth = false,
    customStyle,
    ...props
  },
  ref
) {
  return (
    <StyledChip
      ref={ref}
      variant={variant}
      weight={weight}
      brandColor={brandColor}
      size={size}
      isRound={isRound}
      fullWidth={fullWidth}
      css={customStyle}
      {...props}
    >
      {startIcon}
      {!iconOnly && children}
      {endIcon}
    </StyledChip>
  );
});

export default Chip;
