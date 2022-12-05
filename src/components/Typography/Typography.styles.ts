import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import type { TypographyProps } from '.';

export const StyledTypography = styled.div<
  Pick<TypographyProps, 'variant' | 'weight' | 'brandColor' | 'noWrap' | 'lineClamp'>
>`
  color: ${({
    theme: {
      palette: { common }
    }
  }) => common.ui20};

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
      : {}};

  ${({ noWrap, lineClamp }): CSSObject =>
    noWrap && lineClamp
      ? {
          display: '-webkit-box',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: lineClamp
        }
      : {}};

  ${({ noWrap, lineClamp }): CSSObject =>
    noWrap && !lineClamp
      ? {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      : {}};
`;
