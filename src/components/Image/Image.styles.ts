import { convertNumberToCSSValue } from '@utils';
import type { CSSValue } from '@types';
import styled, { CSSObject } from '@emotion/styled';

import type { ImageProps } from '.';

export const RatioImageBox = styled.div<
  Pick<ImageProps, 'round'> & {
    dataWidth?: CSSValue;
    dataHeight?: CSSValue;
  }
>`
  width: ${({ dataWidth }) => (dataWidth ? convertNumberToCSSValue(dataWidth) : 'auto')};
  height: ${({ dataHeight }) => (dataHeight ? convertNumberToCSSValue(dataHeight) : 'auto')};
  overflow: hidden;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const RatioImageWrapper = styled.div<Pick<ImageProps, 'ratio'>>`
  position: relative;
  overflow: hidden;

  ${({ ratio = '1:1' }): CSSObject => {
    const splitRatio = String(ratio).split(':');
    return {
      paddingTop: `calc(100% / ${splitRatio[0]} * ${splitRatio[1]})`
    };
  }};
`;

export const RatioImageInner = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate3d(50%, 50%, 0);
`;

export const ImageWrapper = styled.div<
  Pick<ImageProps, 'round'> & {
    dataWidth?: CSSValue;
    dataHeight?: CSSValue;
  }
>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: ${({ dataWidth }) => (dataWidth ? convertNumberToCSSValue(dataWidth) : 'auto')};
  height: ${({ dataHeight }) => (dataHeight ? convertNumberToCSSValue(dataHeight) : 'auto')};

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const RatioImg = styled.img<
  Pick<ImageProps, 'width' | 'height' | 'fill'> & {
    loaded: boolean;
    loadFailed: boolean;
  }
>`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  max-width: 100%;
  height: auto;
  transform: translate3d(-50%, -50%, 0);

  visibility: ${({ loaded, loadFailed }) => (loaded && !loadFailed ? 'visible' : 'hidden')};

  ${({ fill }): CSSObject =>
    fill
      ? {
          width: '100%',
          height: '100%',
          objectFit: fill
        }
      : {}}
`;

export const Img = styled.img<
  Pick<ImageProps, 'width' | 'height' | 'fill'> & {
    loaded: boolean;
    loadFailed: boolean;
  }
>`
  width: ${({ width }) => (width ? convertNumberToCSSValue(width) : 'auto')};
  height: ${({ height }) => (height ? convertNumberToCSSValue(height) : 'auto')};

  visibility: ${({ loaded, loadFailed }) => (loaded && !loadFailed ? 'visible' : 'hidden')};

  ${({ fill }): CSSObject =>
    fill
      ? {
          objectFit: fill
        }
      : {}}
`;

export const FallbackWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
  transform: translate3d(-50%, -50%, 0);
`;

export const SkeletonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BackgroundImageWrapper = styled.div<
  Pick<ImageProps, 'ratio' | 'round' | 'disableAspectRatio'> & {
    dataWidth?: CSSValue;
    dataHeight?: CSSValue;
  }
>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ${({ disableAspectRatio, dataWidth, dataHeight, ratio = '1:1' }): CSSObject => {
    if (disableAspectRatio) {
      return {
        width: dataWidth ? convertNumberToCSSValue(dataWidth) : 'auto',
        height: dataHeight ? convertNumberToCSSValue(dataHeight) : 'auto'
      };
    }
    let cssObject: CSSObject = {
      width: '100%'
    };
    const splitRatio = String(ratio).split(':');
    cssObject = {
      ...cssObject,
      paddingTop: `calc(100% / ${splitRatio[0]} * ${splitRatio[1]})`
    };
    return cssObject;
  }}
  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const BackgroundImg = styled.div<
  Pick<ImageProps, 'alt' | 'fill'> & {
    dataSrc: string;
    loaded: boolean;
    loadFailed: boolean;
  }
>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ dataSrc }) => dataSrc});
  background-repeat: no-repeat;
  background-size: ${({ fill }) => fill};
  background-position: center;
  visibility: ${({ loaded, loadFailed }) => (loaded && !loadFailed ? 'visible' : 'hidden')};
`;
