import { convertNumberToCSSValue } from '@utils';
import type { CSSValue } from '@types';
import styled, { CSSObject } from '@emotion/styled';

import type { SkeletonProps } from '.';

export const SkeletonWrapper = styled.div<Pick<SkeletonProps, 'ratio' | 'round'>>`
  position: relative;
  overflow: hidden;

  ${({ ratio }): CSSObject => {
    const splitRatio = String(ratio).split(':');
    return {
      paddingTop: `calc(100% / ${splitRatio[0]} * ${splitRatio[1]})`
    };
  }};

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const SkeletonInner = styled.div<Pick<SkeletonProps, 'round'>>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate(50%, 50%);

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const StyledSkeleton = styled.div<
  Pick<
    SkeletonProps,
    | 'maxWidth'
    | 'maxHeight'
    | 'minWidth'
    | 'minHeight'
    | 'round'
    | 'animation'
    | 'disableAspectRatio'
    | 'disableAnimation'
  > & {
    dataWidth?: CSSValue;
    dataHeight?: CSSValue;
  }
>`
  position: relative;
  overflow: hidden;

  ${({ dataWidth }) => (dataWidth ? `width: ${convertNumberToCSSValue(dataWidth)}` : '')};
  ${({ dataHeight }) => (dataHeight ? `height: ${convertNumberToCSSValue(dataHeight)}` : '')};
  ${({ maxWidth }) => (maxWidth ? `max-width: ${convertNumberToCSSValue(maxWidth)}` : '')};
  ${({ maxHeight }) => (maxHeight ? `max-height: ${convertNumberToCSSValue(maxHeight)}` : '')};
  ${({ minWidth }) => (minWidth ? `min-width: ${convertNumberToCSSValue(minWidth)}` : '')};
  ${({ minHeight }) => (minHeight ? `min-height: ${convertNumberToCSSValue(minHeight)}` : '')};

  background-color: ${({
    theme: {
      palette: { common }
    }
  }) => common.ui90};

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};

  ${({ disableAspectRatio }): CSSObject =>
    !disableAspectRatio
      ? {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%)'
        }
      : {}};

  ${({
    theme: {
      palette: { common }
    },
    animation,
    disableAnimation
  }): CSSObject => {
    if (disableAnimation) return {};

    if (animation === 'wave') {
      return {
        '&:after': {
          content: '""',
          top: 0,
          left: 0,
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `linear-gradient(
      -45deg,
      ${common.ui95} 30%,
      transparent 50%,
      ${common.ui95} 70%
    )`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '350% 350%',
          animation: 'wave 1.2s ease-in-out infinite',
          animationDelay: '-0.2s',
          opacity: 0.6
        }
      };
    }
    return {
      animation: 'pulse 0.8s linear 0s infinite alternate'
    };
  }};

  @keyframes pulse {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }
  @keyframes wave {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;
