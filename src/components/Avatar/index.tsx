import React, { memo, ImgHTMLAttributes } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledAvatar } from './Avatar.styles';

export interface AvatarProps extends GenericComponentProps<ImgHTMLAttributes<HTMLImageElement>> {
  variant?: 'square' | 'round' | 'circle';
}

function Avatar({
  variant = 'round',
  width = 24,
  height = 24,
  src,
  alt,
  customStyle,
  ...props
}: AvatarProps) {
  return (
    <StyledAvatar
      variant={variant}
      width={width}
      height={height}
      src={src}
      alt={alt}
      css={customStyle}
      {...props}
    />
  );
}

export default memo(Avatar);
