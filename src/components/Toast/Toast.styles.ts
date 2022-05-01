import styled, { CSSObject } from '@emotion/styled';

import { ToastProps } from '.';

export const StyledToast = styled.div<
  Pick<ToastProps, 'bottom' | 'transitionDuration' | 'fullWidth'> & {
    toastOpen: boolean;
    toastClose: boolean;
  }
>`
  position: absolute;
  left: 50%;
  bottom: ${({ bottom }) => bottom};
  transform: translateX(-50%);
  width: fit-content;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${({ theme: { palette } }) => palette.common.white};
  z-index: 1005;

  visibility: hidden;
  opacity: 0;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1)
    0ms;

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
