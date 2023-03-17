import React, { forwardRef, useEffect, useState } from 'react';
import type { HTMLAttributes, ReactElement } from 'react';

import Skeleton from '@components/Skeleton';
import Icon from '@components/Icon';

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
import type { CSSValue, GenericComponentProps, IconName } from '../../types';

export interface ImageProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width?: CSSValue;
  height?: CSSValue;
  ratio?: '1:1' | '1:2' | '2:1' | '4:3' | '5:6' | '16:9';
  round?: CSSValue;
  fill?: 'cover' | 'contain';
  disableAspectRatio?: boolean;
  disableOnBackground?: boolean;
  disableSkeleton?: boolean;
  disableSkeletonAnimation?: boolean;
  fallbackElement?: ReactElement;
  fallbackIcon?: {
    name: IconName;
    width?: CSSValue;
    height?: CSSValue;
  };
}

const Image = forwardRef<HTMLDivElement, ImageProps>(function Image(
  {
    src,
    srcSet,
    sizes,
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
    fallbackElement,
    fallbackIcon = {
      name: 'ImageOutlined',
      width: 24,
      height: 24
    },
    customStyle,
    ...props
  },
  ref
) {
  const [loaded, setLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  const handleLoad = () => setLoaded(true);

  const handleError = () => setLoadFailed(true);

  useEffect(() => {
    if (src) {
      setLoaded(false);
      setLoadFailed(false);
    }
  }, [src]);

  useEffect(() => {
    if (!disableSkeleton) {
      const img = new window.Image();
      img.src = src;
      img.onload = () => setLoaded(true);
      img.onerror = () => setLoadFailed(true);
    } else {
      setLoaded(true);
    }
  }, [disableSkeleton, src]);

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
        {!loadFailed && (
          <BackgroundImg
            dataSrc={src}
            alt={alt}
            fill={fill}
            loaded={loaded}
            loadFailed={loadFailed}
            onLoad={handleLoad}
            onError={handleError}
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
        {loadFailed && fallbackElement && fallbackElement}
        {loadFailed && !fallbackElement && fallbackIcon && (
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
        {!loadFailed && (
          <Img
            width={width}
            height={height}
            src={src}
            alt={alt}
            fill={fill}
            loaded={loaded}
            loadFailed={loadFailed}
            onLoad={handleLoad}
            onError={handleError}
            srcSet={srcSet}
            sizes={sizes}
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
        {loadFailed && fallbackElement && fallbackElement}
        {loadFailed && !fallbackElement && fallbackIcon && (
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
          {!loadFailed && (
            <RatioImg
              width={width}
              height={height}
              src={src}
              alt={alt}
              fill={fill}
              loaded={loaded}
              loadFailed={loadFailed}
              onLoad={handleLoad}
              onError={handleError}
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
          {loadFailed && fallbackElement && <FallbackWrapper>{fallbackElement}</FallbackWrapper>}
          {loadFailed && !fallbackElement && (
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
