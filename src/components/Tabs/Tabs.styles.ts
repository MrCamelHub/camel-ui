import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import type { TabsProps } from '.';

export const StyledTabs = styled.div<Pick<TabsProps, 'fullWidth'>>`
  width: fit-content;

  ${({ fullWidth }): CSSObject => (fullWidth ? { width: '100%' } : {})};
`;

export const TabsInner = styled.div<Pick<TabsProps, 'brandColor' | 'fullWidth' | 'hideIndicator'>>`
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
