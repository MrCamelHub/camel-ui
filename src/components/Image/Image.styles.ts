import styled, { CSSObject } from '@emotion/styled';

import { convertNumberToCSSValue } from '@utils';

import type { CSSValue } from '../../types';

import type { ImageProps } from '.';

export const RatioImageBox = styled.div<Pick<ImageProps, 'round'>>`
  overflow: hidden;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const RatioImageWrapper = styled.div<Pick<ImageProps, 'ratio' | 'round'>>`
  position: relative;
  overflow: hidden;

  background-color: ${({
    theme: {
      palette: { common }
    }
  }) => common.ui95};

  ${({ ratio }): CSSObject => {
    switch (ratio) {
      case '4:3':
        return {
          paddingTop: '75%'
        };
      case '16:9':
        return {
          paddingTop: '56.25%'
        };
      default:
        return {
          paddingTop: '100%'
        };
    }
  }};

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const RatioImageInner = styled.div<Pick<ImageProps, 'round'>>`
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

  background-color: ${({
    theme: {
      palette: { common }
    }
  }) => common.ui95};

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const RatioImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  max-width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
`;

export const FallbackWrapper = styled.div<Pick<ImageProps, 'round'>>`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
  overflow: hidden;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const SkeletonWrapper = styled.div<Pick<ImageProps, 'round'>>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const BackgroundImg = styled.div<
  Pick<ImageProps, 'ratio' | 'alt' | 'disableAspectRatio'> & {
    dataSrc?: string;
    dataWidth?: CSSValue;
    dataHeight?: CSSValue;
  }
>`
  ${({ disableAspectRatio, dataWidth, dataHeight, ratio }): CSSObject => {
    if (disableAspectRatio) {
      return {
        width: dataWidth ? convertNumberToCSSValue(dataWidth) : 'auto',
        height: dataHeight ? convertNumberToCSSValue(dataHeight) : 'auto'
      };
    }

    let cssObject: CSSObject = {
      width: '100%'
    };

    switch (ratio) {
      case '1:2':
        cssObject = {
          ...cssObject,
          paddingTop: '200%'
        };
        break;
      case '2:1':
        cssObject = {
          ...cssObject,
          paddingTop: '50%'
        };
        break;
      case '4:3':
        cssObject = {
          ...cssObject,
          paddingTop: '75%'
        };
        break;
      case '16:9':
        cssObject = {
          ...cssObject,
          paddingTop: '56.25%'
        };
        break;
      default:
        cssObject = {
          ...cssObject,
          paddingTop: '100%'
        };
        break;
    }

    return cssObject;
  }}
  background-image: url(${({ dataSrc }) => dataSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
