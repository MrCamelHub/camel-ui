import React, { forwardRef, HTMLAttributes } from 'react';
import { useTheme } from '@theme';

import Icon from '@components/Icon';

import { GenericComponentProps, Size } from '../../types';
import { StyledRating } from './Rating.styles';

export interface RatingProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  count: number;
  value?: number;
  size?: Exclude<Size, 'xsmall' | 'xlarge'>;
}

const Rating = forwardRef<HTMLDivElement, RatingProps>(function Rating(
  { count, value = 0, size = 'medium', ...props },
  ref
) {
  const {
    theme: { palette }
  } = useTheme();

  return (
    <StyledRating ref={ref} {...props}>
      {Array.from({ length: count }).map((_, index) => (
        <Icon
          // eslint-disable-next-line react/no-array-index-key
          key={`star-${index}`}
          name="StarFilled"
          size={size}
          color={value > index ? '#FFD25E' : palette.common.grey['96']}
        />
      ))}
    </StyledRating>
  );
});

export default Rating;
