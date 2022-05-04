import React, { forwardRef, memo, ImgHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps, BoxRoundKey } from '../../types';
import { StyledAvatar } from './Avatar.styles';

export interface AvatarProps extends GenericComponentProps<ImgHTMLAttributes<HTMLImageElement>> {
  round?: BoxRoundKey;
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(function Avatar(
  { width = 24, height = 24, src, alt, customStyle, round = '4', ...props },
  ref
) {
  const { theme } = useTheme();
  return (
    <StyledAvatar
      ref={ref}
      theme={theme}
      width={width}
      height={height}
      src={src}
      alt={alt}
      round={round}
      css={customStyle}
      {...props}
    />
  );
});

export default memo(Avatar);
