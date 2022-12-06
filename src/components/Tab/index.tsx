import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactElement } from 'react';

import { StyledTab } from './Tab.styles';
import type { BrandColor, GenericComponentProps, Size } from '../../types';

export interface TabProps extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  brandColor?: Extract<BrandColor, 'primary' | 'black'>;
  size?: Extract<Size, 'large' | 'xlarge'>;
  text: string | ReactElement;
  value: number | string;
  selected?: boolean;
  fullWidth?: boolean;
  hideIndicator?: boolean;
}

const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(
  {
    brandColor = 'black',
    size = 'large',
    text,
    value,
    selected,
    fullWidth,
    hideIndicator,
    customStyle,
    ...props
  },
  ref
) {
  return (
    <StyledTab
      ref={ref}
      brandColor={brandColor}
      size={size}
      data-value={value}
      selected={selected}
      fullWidth={fullWidth}
      hideIndicator={hideIndicator}
      {...props}
      css={customStyle}
      role="tab"
    >
      {text}
    </StyledTab>
  );
});

export default Tab;
