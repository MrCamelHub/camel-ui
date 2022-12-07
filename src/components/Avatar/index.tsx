import type { HTMLAttributes } from 'react';
import React, { ReactElement, forwardRef, useEffect, useState } from 'react';

import Skeleton from '@components/Skeleton';
import Icon from '@components/Icon';

import { AvatarWrapper, StyledAvatar } from './Avatar.styles';
import type { CSSValue, GenericComponentProps, IconName } from '../../types';

export interface AvatarProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  src: string;
  alt: string;
  width?: CSSValue;
  height?: CSSValue;
  round?: CSSValue;
  disableSkeleton?: boolean;
  disableSkeletonAnimation?: boolean;
  fallbackElement?: ReactElement;
  fallbackIcon?: {
    name: IconName;
    width?: CSSValue;
    height?: CSSValue;
  };
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(function Avatar(
  {
    width = 24,
    height = 24,
    src,
    alt,
    customStyle,
    round = 4,
    disableSkeleton,
    disableSkeletonAnimation,
    fallbackElement,
    fallbackIcon = {
      name: 'ImageOutlined',
      width: 24,
      height: 24
    },
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
    } else if (disableSkeleton) {
      setLoaded(true);
    }
  }, [disableSkeleton, src]);

  return (
    <AvatarWrapper
      ref={ref}
      dataWidth={width}
      dataHeight={height}
      round={round}
      {...props}
      css={customStyle}
    >
      {src && !loadFailed && (
        <StyledAvatar
          width={width}
          height={height}
          src={src}
          alt={alt}
          round={round}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      {!disableSkeleton && !loaded && !loadFailed && (
        <Skeleton
          width="100%"
          height="100%"
          disableAspectRatio
          disableAnimation={disableSkeletonAnimation}
          customStyle={{
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      )}
      {loadFailed && fallbackElement && fallbackElement}
      {(!src || loadFailed) && !fallbackElement && (
        <Icon name={fallbackIcon.name} width={fallbackIcon.width} height={fallbackIcon.height} />
      )}
    </AvatarWrapper>
  );
});

export default Avatar;
