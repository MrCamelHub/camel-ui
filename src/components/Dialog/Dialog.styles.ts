import styled, { CSSObject } from '@emotion/styled';

import { DialogProps } from '.';

export const Wrapper = styled.div<
  Pick<DialogProps, 'fullScreen' | 'transitionDuration'> & {
    dialogOpen: boolean;
    dialogClose: boolean;
  }
>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${({ fullScreen }): CSSObject =>
    !fullScreen
      ? {
          padding: 20
        }
      : {}};

  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: ${({ theme: { zIndex } }) => zIndex.dialog};
  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1)
    0ms;

  ${({ dialogOpen }): CSSObject =>
    dialogOpen
      ? {
          opacity: 1,
          visibility: 'visible'
        }
      : {}};
  ${({ dialogClose }): CSSObject =>
    dialogClose
      ? {
          opacity: 0
        }
      : {}};
`;

export const StyledDialog = styled.div<
  Pick<DialogProps, 'fullScreen' | 'transitionDuration' | 'disablePadding'> & {
    dialogOpen: boolean;
    dialogClose: boolean;
  }
>`
  padding: 20px;

  ${({ disablePadding }): CSSObject => (disablePadding ? { padding: 0 } : {})}

  border: 1px solid ${({ theme: { palette } }) => palette.common.grey['90']};
  background-color: ${({ theme: { palette } }) => palette.common.white};
  box-shadow: ${({
    theme: {
      box: { shadow }
    }
  }) => shadow.modal};

  ${({ fullScreen }): CSSObject =>
    !fullScreen
      ? {
          borderRadius: 8,
          boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)'
        }
      : {
          width: '100%',
          height: '100%'
        }};

  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1)
    0ms;
  z-index: ${({ theme: { zIndex } }) => zIndex.dialog};

  ${({ dialogOpen }): CSSObject =>
    dialogOpen
      ? {
          opacity: 1,
          visibility: 'visible'
        }
      : {}};
  ${({ dialogClose }): CSSObject =>
    dialogClose
      ? {
          opacity: 0
        }
      : {}};
`;
