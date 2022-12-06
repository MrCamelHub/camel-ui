import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import type { TabGroupProps } from '.';

export const StyledTabGroup = styled.div`
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export const TabGroupInner = styled.div<
  Pick<TabGroupProps, 'brandColor' | 'fullWidth' | 'hideIndicator' | 'hideLine'>
>`
  display: flex;
  align-items: center;
  gap: 20px;
  width: fit-content;
  ${({
    theme: {
      palette: { common }
    },
    hideLine
  }): CSSObject =>
    !hideLine
      ? {
          borderBottom: `1px solid ${common.line01}`
        }
      : {}}

  ${({ theme, brandColor }): CSSObject => ({
    '& > button.selected': {
      borderBottomColor: getBrandColorCodeByColorName(theme, brandColor)
    }
  })};

  ${({ hideIndicator }): CSSObject =>
    hideIndicator
      ? {
          '& > button.selected': {
            borderBottomColor: 'transparent'
          }
        }
      : {}};

  ${({ fullWidth }): CSSObject =>
    fullWidth ? { width: '100%', gap: 0, '& > button': { width: 'auto', flexGrow: 1 } } : {}};
`;
