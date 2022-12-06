import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';

import { getBrandColorCodeByColorName } from '@utils';

import type { TabProps } from '.';

export const StyledTab = styled.button<
  Pick<TabProps, 'brandColor' | 'size' | 'selected' | 'fullWidth' | 'hideIndicator'>
>`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border-bottom: 2px solid transparent;
  justify-content: center;
  color: ${({
    theme: {
      palette: { common }
    }
  }) => common.ui60};
  ${({
    theme: {
      typography: { h3, h4 }
    },
    size
  }): CSSObject => {
    switch (size) {
      case 'xlarge':
        return {
          height: 44,
          fontSize: h3.size,
          fontWeight: h3.weight.regular,
          lineHeight: h3.lineHeight,
          letterSpacing: h3.letterSpacing
        };
      default:
        return {
          height: 40,
          fontSize: h4.size,
          fontWeight: h4.weight.regular,
          lineHeight: h4.lineHeight,
          letterSpacing: h4.letterSpacing
        };
    }
  }};

  &.size-large {
    ${({
      theme: {
        typography: { h4 }
      }
    }): CSSObject => ({
      height: 40,
      fontSize: h4.size,
      fontWeight: h4.weight.regular,
      lineHeight: h4.lineHeight,
      letterSpacing: h4.letterSpacing
    })};
  }
  &.size-xlarge {
    ${({
      theme: {
        typography: { h3 }
      }
    }): CSSObject => ({
      height: 44,
      fontSize: h3.size,
      fontWeight: h3.weight.regular,
      lineHeight: h3.lineHeight,
      letterSpacing: h3.letterSpacing
    })};
  }
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
