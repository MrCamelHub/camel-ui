import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import type {
  BrandColor,
  GenericComponentProps,
  RequireAtOnlyOneIcon,
  Size,
  TypographyWeight,
  Variant
} from '../../types';
import { EndIcon, StyledChip, SubText } from './Chip.styles';

export interface BaseChipProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: Exclude<Variant, 'inline'>;
  brandColor?: Exclude<BrandColor, 'red' | 'purple'>;
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
    weight = 'regular',
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
      {endIcon && <EndIcon size={size}>{endIcon}</EndIcon>}
    </StyledChip>
  );
});

export default Chip;
