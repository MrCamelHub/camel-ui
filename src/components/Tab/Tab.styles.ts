import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';

import { getBrandColorCodeByColorName } from '@utils';

import type { TabProps } from '.';

export const StyledTab = styled.button<
  Pick<TabProps, 'brandColor' | 'selected' | 'fullWidth' | 'hideIndicator'>
>`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  height: 40px;
  border-bottom: 2px solid transparent;
  justify-content: center;
  color: ${({
    theme: {
      palette: { common }
    }
  }) => common.ui60};
  ${({
    theme: {
      typography: { h4 }
    }
  }): CSSObject => ({
    fontSize: h4.size,
    fontWeight: h4.weight.regular,
    lineHeight: h4.lineHeight,
    letterSpacing: h4.letterSpacing
  })};

  &.selected {
    color: ${({
      theme: {
        palette: { common }
      }
    }) => common.ui20};
    ${({
      theme: {
        typography: { h4 }
      }
    }): CSSObject => ({
      fontWeight: h4.weight.bold
    })};

    &.primary {
      border-bottom-color: ${({
        theme: {
          palette: { primary }
        }
      }) => primary.main};
    }
    &.black {
      border-bottom-color: ${({
        theme: {
          palette: { common }
        }
      }) => common.ui20};
    }
    &.hideIndicator {
      border-bottom-color: transparent;
    }
  }

  ${({
    theme,
    theme: {
      typography: { h4 },
      palette: { common }
    },
    brandColor,
    selected
  }): CSSObject =>
    selected
      ? {
          borderBottomColor: getBrandColorCodeByColorName(theme, brandColor),
          fontWeight: h4.weight.bold,
          color: common.ui20
        }
      : {}};

  ${({ fullWidth }): CSSObject => (fullWidth ? { width: '100%' } : {})};

  ${({ hideIndicator }): CSSObject => (hideIndicator ? { borderBottomColor: 'transparent' } : {})};
`;
