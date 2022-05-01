import React, { memo, ImgHTMLAttributes } from 'react';

import { GenericComponentProps, CSSValue } from '../../types';
import { StyledAvatar } from './Avatar.styles';

export interface AvatarProps
  extends GenericComponentProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  round?: CSSValue;
}

function Avatar({
  componentRef,
  width = 24,
  height = 24,
  src,
  alt,
  customStyle,
  round = 4,
  ...props
}: AvatarProps) {
  return (
    <StyledAvatar
      ref={componentRef}
      width={width}
      height={height}
      src={src}
      alt={alt}
      round={round}
      css={customStyle}
      {...props}
    />
  );
}

export default memo(Avatar);
