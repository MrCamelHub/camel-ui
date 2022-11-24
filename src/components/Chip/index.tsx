import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import React, { forwardRef } from 'react';

import { StyledChip, SubText } from './Chip.styles';
import type {
  BrandColor,
  GenericComponentProps,
  RequireAtOnlyOneIcon,
  Size,
  TypographyWeight,
  Variant
} from '../../types';

export interface BaseChipProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: Exclude<Variant, 'inline'>;
  brandColor?: BrandColor;
  size?: Size;
  weight?: keyof TypographyWeight;
  subText?: string | number;
  isRound?: boolean;
  fullWidth?: boolean;
}

export type ChipProps = RequireAtOnlyOneIcon<BaseChipProps>;

const Chip = forwardRef<HTMLButtonElement, PropsWithChildren<ChipProps>>(function Button(
  {
    children,
    variant = 'outline',
    brandColor = 'gray',
    size = 'medium',
    weight = 'medium',
    subText,
    isRound = true,
    startIcon,
    endIcon,
    iconOnly,
    fullWidth,
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
      {subText && (
        <SubText variant={variant} brandColor={brandColor} size={size}>
          {subText}
        </SubText>
      )}
      {endIcon}
    </StyledChip>
  );
});

export default Chip;
