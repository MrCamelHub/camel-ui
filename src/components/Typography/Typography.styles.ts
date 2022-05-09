import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { TypographyProps } from '.';

export const StyledTypography = styled.div<
  Pick<TypographyProps, 'variant' | 'weight' | 'brandColor'>
>`
  color: ${({ theme: { palette } }) => palette.common.grey['20']};

  ${({ theme: { typography }, variant = 'body1', weight = 'medium' }): CSSObject => ({
    fontSize: typography[variant].size,
    fontWeight: typography[variant].weight[weight],
    lineHeight: typography[variant].lineHeight,
    letterSpacing: typography[variant].letterSpacing
  })};

  ${({ theme, brandColor }): CSSObject =>
    brandColor
      ? {
          color: getBrandColorCodeByColorName(theme, brandColor)
        }
      : {}}
`;
