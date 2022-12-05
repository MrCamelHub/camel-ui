import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import type { TabGroupProps } from '.';

export const StyledTabGroup = styled.div<Pick<TabGroupProps, 'fullWidth'>>`
  width: fit-content;

  ${({ fullWidth }): CSSObject => (fullWidth ? { width: '100%' } : {})};
`;

export const TabGroupInner = styled.div<
  Pick<TabGroupProps, 'brandColor' | 'fullWidth' | 'hideIndicator'>
>`
  display: flex;
  align-items: center;
  gap: 20px;
  width: fit-content;

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
