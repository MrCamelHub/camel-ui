import type { HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

import Icon from '@components/Icon';

import { useTheme } from '@theme';

import { StyledRating } from './Rating.styles';
import type { GenericComponentProps, Size } from '../../types';

export interface RatingProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  count: number;
  value?: number;
  size?: Exclude<Size, 'xsmall' | 'xlarge'>;
}

const Rating = forwardRef<HTMLDivElement, RatingProps>(function Rating(
  { count, value = 0, size = 'medium', customStyle, ...props },
  ref
) {
  const {
    theme: {
      palette: { common }
    }
  } = useTheme();

  return (
    <StyledRating ref={ref} {...props} css={customStyle}>
      {Array.from({ length: count }).map((_, index) => (
        <Icon
          // eslint-disable-next-line react/no-array-index-key
          key={`star-${index}`}
          name="StarFilled"
          size={size}
          color={value > index ? '#FFD25E' : common.ui95}
        />
      ))}
    </StyledRating>
  );
});

export default Rating;
