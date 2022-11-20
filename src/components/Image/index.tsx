import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { HTMLAttributes, ReactElement } from 'react';

import Skeleton from '@components/Skeleton';
import Icon from '@components/Icon';

import {
  BackgroundImg,
  FallbackWrapper,
  ImageWrapper,
  RatioImageBox,
  RatioImageInner,
  RatioImageWrapper,
  RatioImg,
  SkeletonWrapper
} from './Image.styles';
import type { CSSValue, GenericComponentProps, IconName } from '../../types';

export interface ImageProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  src: string;
  alt: string;
  width?: CSSValue;
  height?: CSSValue;
  ratio?: '1:1' | '1:2' | '2:1' | '4:3' | '16:9';
  round?: CSSValue;
  disableAspectRatio?: boolean;
  disableLazyLoad?: boolean;
  disableSkeleton?: boolean;
  disableSkeletonAnimation?: boolean;
  disableBackgroundImage?: boolean;
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
    alt,
    width,
    height,
    ratio = '1:1',
    round,
    disableBackgroundImage = true,
    disableAspectRatio,
    disableLazyLoad = true,
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
  const [imageSrc, setImageSrc] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [isIntersecting, setIntersecting] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);

  const handleError = () => setLoadFailed(true);

  useEffect(() => {
    if (!disableLazyLoad && isIntersecting && src) {
      setImageSrc(src);
    }
  }, [src, isIntersecting, disableLazyLoad]);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (!disableLazyLoad) {
      try {
        observer = new IntersectionObserver(([e]) => setIntersecting(e.isIntersecting));

        if (imageRef.current) {
          observer.observe(imageRef.current);
        }
      } catch {
        setIntersecting(true);
      }
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [disableLazyLoad]);

  useEffect(() => {
    if (disableLazyLoad && !disableSkeleton) {
      const img = new window.Image();
      img.src = src;
      img.onload = () => setLoaded(true);
    } else if (!disableLazyLoad && !disableSkeleton && imageSrc) {
      const img = new window.Image();
      img.src = imageSrc;
      img.onload = () => setLoaded(true);
    } else if (disableSkeleton) {
      setLoaded(true);
    }
  }, [disableLazyLoad, disableSkeleton, src, imageSrc]);

  if (!src) return null;

  if (!disableBackgroundImage) {
    return (
      <div ref={imageRef}>
        <ImageWrapper
          ref={ref}
          dataWidth={width}
          dataHeight={height}
          round={round}
          {...props}
          css={customStyle}
        >
          {disableLazyLoad && !loadFailed && (
            <BackgroundImg
              ratio={ratio}
              dataWidth={width}
              dataHeight={height}
              dataSrc={src}
              alt={alt}
              disableAspectRatio={disableAspectRatio}
            />
          )}
          {!disableLazyLoad && !loadFailed && imageSrc && (
            <BackgroundImg
              ref={imageRef}
              ratio={ratio}
              dataWidth={width}
              dataHeight={height}
              dataSrc={imageSrc}
              alt={alt}
              disableAspectRatio={disableAspectRatio}
            />
          )}
          {!disableSkeleton && !loaded && !loadFailed && (
            <SkeletonWrapper round={round}>
              <Skeleton
                ratio={ratio}
                width={width}
                height={height}
                round={round}
                disableAspectRatio={disableAspectRatio}
                disableAnimation={disableSkeletonAnimation}
              />
            </SkeletonWrapper>
          )}
          {loadFailed && fallbackElement && fallbackElement}
          {loadFailed && !fallbackElement && fallbackIcon && (
            <Icon
              name={fallbackIcon.name}
              width={fallbackIcon.width}
              height={fallbackIcon.height}
            />
          )}
        </ImageWrapper>
      </div>
    );
  }

  if (disableAspectRatio) {
    return (
      <div ref={imageRef}>
        <ImageWrapper
          ref={ref}
          dataWidth={width}
          dataHeight={height}
          round={round}
          {...props}
          css={customStyle}
        >
          {disableLazyLoad && !loadFailed && (
            <img width={width} height={height} src={src} alt={alt} onError={handleError} />
          )}
          {!disableLazyLoad && !loadFailed && imageSrc && (
            <img
              ref={imageRef}
              width="100%"
              height="100%"
              src={imageSrc}
              alt={alt}
              onError={handleError}
            />
          )}
          {!disableSkeleton && !loaded && !loadFailed && (
            <SkeletonWrapper round={round}>
              <Skeleton
                width={width}
                height={height}
                round={round}
                disableAspectRatio
                disableAnimation={disableSkeletonAnimation}
              />
            </SkeletonWrapper>
          )}
          {loadFailed && fallbackElement && fallbackElement}
          {loadFailed && !fallbackElement && fallbackIcon && (
            <Icon
              name={fallbackIcon.name}
              width={fallbackIcon.width}
              height={fallbackIcon.height}
            />
          )}
        </ImageWrapper>
      </div>
    );
  }

  return (
    <div ref={imageRef}>
      <RatioImageBox ref={ref} round={round}>
        <RatioImageWrapper ratio={ratio} round={round} {...props} css={customStyle}>
          <RatioImageInner round={round}>
            {disableLazyLoad && !loadFailed && (
              <RatioImg width={width} height={height} src={src} alt={alt} onError={handleError} />
            )}
            {!disableLazyLoad && imageSrc && !loadFailed && (
              <RatioImg
                width={width}
                height={height}
                src={imageSrc}
                alt={alt}
                onError={handleError}
              />
            )}
            {!disableSkeleton && !loaded && !loadFailed && (
              <SkeletonWrapper
                round={round}
                css={{
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Skeleton ratio={ratio} width={width} height={height} round={round} />
              </SkeletonWrapper>
            )}
            {loadFailed && fallbackElement && (
              <FallbackWrapper round={round}>{fallbackElement}</FallbackWrapper>
            )}
            {loadFailed && !fallbackElement && fallbackIcon && (
              <FallbackWrapper round={round}>
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
    </div>
  );
});

export default Image;
