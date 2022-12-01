import styled, { CSSObject } from '@emotion/styled';

import type { DialogProps } from '.';

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
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1);

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
  Pick<DialogProps, 'fullWidth' | 'fullScreen' | 'transitionDuration' | 'disablePadding'> & {
    dialogOpen: boolean;
    dialogClose: boolean;
  }
>`
  padding: 20px;

  ${({ disablePadding }): CSSObject => (disablePadding ? { padding: 0 } : {})}

  background-color: ${({ theme: { palette } }) => palette.common.bg01};
  box-shadow: ${({
    theme: {
      box: { shadow }
    }
  }) => shadow.modal};

  ${({
    fullScreen,
    theme: {
      box: { round }
    }
  }): CSSObject =>
    !fullScreen
      ? {
          borderRadius: round['16']
        }
      : {
          width: '100%',
          height: '100%'
        }};

  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}}

  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1),
    transform ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  z-index: ${({ theme: { zIndex } }) => zIndex.dialog};
  overflow-y: auto;

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
