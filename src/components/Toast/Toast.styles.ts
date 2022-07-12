import styled, { CSSObject } from '@emotion/styled';

import { ToastProps } from '.';

export const StyledToast = styled.div<
  Pick<ToastProps, 'bottom' | 'edgeSpacing' | 'transitionDuration' | 'disablePadding'> & {
    toastOpen: boolean;
    toastClose: boolean;
  }
>`
  position: fixed;
  left: 50%;
  bottom: ${({ bottom }) => bottom};
  transform: translateX(-50%);
  width: ${({ edgeSpacing }) => `calc(100% - ${(edgeSpacing || 0) * 2}px)`};
  max-width: 335px;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: ${({
    theme: {
      box: { shadow }
    }
  }) => shadow.tooltip};
  color: ${({ theme: { palette } }) => palette.common.white};
  z-index: ${({ theme: { zIndex } }) => zIndex.toast};
  text-align: center;

  visibility: hidden;
  opacity: 0;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1)
    0ms;

  ${({ disablePadding }): CSSObject =>
    disablePadding
      ? {
          padding: 0
        }
      : {}}

  ${({ toastOpen }): CSSObject =>
    toastOpen
      ? {
          visibility: 'visible',
          opacity: 1
        }
      : {}}
  ${({ toastClose }): CSSObject =>
    toastClose
      ? {
          opacity: 0
        }
      : {}}
`;
