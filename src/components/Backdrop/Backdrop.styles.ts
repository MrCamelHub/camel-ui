import styled, { CSSObject } from '@emotion/styled';

import type { BackdropProps } from '.';

export const StyledBackdrop = styled.div<
  Pick<BackdropProps, 'open' | 'transitionDuration'> & {
    close: boolean;
  }
>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({
    theme: {
      palette: { common }
    }
  }) => common.overlay60};
  opacity: 0;
  pointer-events: none;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms ease;
  overflow: hidden;

  ${({ open }): CSSObject =>
    open
      ? {
          opacity: 1,
          pointerEvents: 'visible'
        }
      : {}};

  ${({ close }): CSSObject =>
    close
      ? {
          opacity: 0,
          pointerEvents: 'none'
        }
      : {}};
`;

export const Content = styled.div<Pick<BackdropProps, 'centered'>>`
  ${({ centered }): CSSObject =>
    centered
      ? {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      : {}};
`;
