import React, { forwardRef, useEffect, useState } from 'react';
import type { HTMLAttributes, ReactElement } from 'react';

import Skeleton from '@components/Skeleton';
import Icon from '@components/Icon';

import type { CSSValue, GenericComponentProps, IconName } from '../../types';
import {
  BackgroundImageWrapper,
  BackgroundImg,
  FallbackWrapper,
  ImageWrapper,
  Img,
  RatioImageBox,
  RatioImageInner,
  RatioImageWrapper,
  RatioImg,
  SkeletonWrapper
} from './Image.styles';

export interface ImageProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onLoad' | 'onError'>> {
  src: string;
  alt: string;
  width?: CSSValue;
  height?: CSSValue;
  ratio?: '1:1' | '1:2' | '2:1' | '4:3' | '5:6' | '16:9';
  round?: CSSValue;
  fill?: 'cover' | 'contain';
  fallbackElement?: ReactElement;
  fallbackIcon?: {
    name: IconName;
    width?: CSSValue;
    height?: CSSValue;
  };
  disableAspectRatio?: boolean;
  disableOnBackground?: boolean;
  disableSkeleton?: boolean;
  disableSkeletonAnimation?: boolean;
  disableFallback?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const Image = forwardRef<HTMLDivElement, ImageProps>(function Image(
  {
    src,
    alt,
    width,
    height,
    ratio = '1:1',
    round,
    fill = 'cover',
    disableAspectRatio,
    disableOnBackground = true,
    disableSkeleton,
    disableSkeletonAnimation,
    disableFallback,
    fallbackElement,
    fallbackIcon = {
      name: 'ImageOutlined',
      width: 24,
      height: 24
    },
    customStyle,
    onLoad,
    onError,
    ...props
  },
  ref
) {
  const [loaded, setLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (!loaded && !loadFailed) {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        if (onLoad && typeof onLoad === 'function') {
          onLoad();
        }
        setLoaded(true);
      };
      img.onerror = () => {
        if (onError && typeof onError === 'function') {
          onError();
        }
        setLoadFailed(true);
      };
    }
  }, [src, loaded, loadFailed, onLoad, onError]);

  useEffect(() => {
    setLoaded(false);
    setLoadFailed(false);
  }, [src]);

  useEffect(() => {
    if (!disableOnBackground) {
      setLoaded(false);
      setLoadFailed(false);
    }
  }, [disableOnBackground]);

  if (!disableOnBackground) {
    return (
      <BackgroundImageWrapper
        ref={ref}
        ratio={ratio}
        dataWidth={width}
        dataHeight={height}
        round={round}
        disableAspectRatio={disableAspectRatio}
        {...props}
        css={customStyle}
      >
        {disableSkeleton && !loadFailed && (
          <BackgroundImg dataSrc={src} alt={alt} fill={fill} loaded loadFailed={false} />
        )}
        {!disableSkeleton && !loadFailed && (
          <BackgroundImg
            dataSrc={src}
            alt={alt}
            fill={fill}
            loaded={loaded}
            loadFailed={loadFailed}
          />
        )}
        {!disableSkeleton && !loaded && !loadFailed && (
          <SkeletonWrapper>
            <Skeleton
              width="100%"
              height="100%"
              disableAspectRatio
              disableAnimation={disableSkeletonAnimation}
            />
          </SkeletonWrapper>
        )}
        {!disableFallback && loadFailed && fallbackElement && fallbackElement}
        {!disableFallback && loadFailed && !fallbackElement && fallbackIcon && (
          <Icon name={fallbackIcon.name} width={fallbackIcon.width} height={fallbackIcon.height} />
        )}
      </BackgroundImageWrapper>
    );
  }

  if (disableAspectRatio) {
    return (
      <ImageWrapper
        ref={ref}
        dataWidth={width}
        dataHeight={height}
        round={round}
        {...props}
        css={customStyle}
      >
        {disableSkeleton && !loadFailed && (
          <Img
            width={width}
            height={height}
            src={src}
            alt={alt}
            fill={fill}
            loaded
            loadFailed={false}
          />
        )}
        {!disableSkeleton && !loadFailed && (
          <Img
            width={width}
            height={height}
            src={src}
            alt={alt}
            fill={fill}
            loaded={loaded}
            loadFailed={loadFailed}
          />
        )}
        {!disableSkeleton && !loaded && !loadFailed && (
          <SkeletonWrapper>
            <Skeleton
              width="100%"
              height="100%"
              disableAspectRatio
              disableAnimation={disableSkeletonAnimation}
            />
          </SkeletonWrapper>
        )}
        {!disableFallback && loadFailed && fallbackElement && fallbackElement}
        {!disableFallback && loadFailed && !fallbackElement && fallbackIcon && (
          <Icon name={fallbackIcon.name} width={fallbackIcon.width} height={fallbackIcon.height} />
        )}
      </ImageWrapper>
    );
  }

  return (
    <RatioImageBox
      ref={ref}
      dataWidth={width}
      dataHeight={height}
      round={round}
      {...props}
      css={customStyle}
    >
      <RatioImageWrapper ratio={ratio}>
        <RatioImageInner>
          {disableSkeleton && !loadFailed && (
            <RatioImg
              width={width}
              height={height}
              src={src}
              alt={alt}
              fill={fill}
              loaded
              loadFailed={false}
            />
          )}
          {!disableSkeleton && !loadFailed && (
            <RatioImg
              width={width}
              height={height}
              src={src}
              alt={alt}
              fill={fill}
              loaded={loaded}
              loadFailed={loadFailed}
            />
          )}
          {!disableSkeleton && !loaded && !loadFailed && (
            <SkeletonWrapper
              css={{
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Skeleton
                width="100%"
                height="100%"
                disableAspectRatio
                disableAnimation={disableSkeletonAnimation}
              />
            </SkeletonWrapper>
          )}
          {!disableFallback && loadFailed && fallbackElement && (
            <FallbackWrapper>{fallbackElement}</FallbackWrapper>
          )}
          {!disableFallback && loadFailed && !fallbackElement && (
            <FallbackWrapper>
              <Icon
                name={fallbackIcon.name}
                width={fallbackIcon.width}
                height={fallbackIcon.height}
              />
            </FallbackWrapper>
          )}
        </RatioImageInner>
      </RatioImageWrapper>
    </RatioImageBox>
  );
});

export default Image;
