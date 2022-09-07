import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { StyledTab } from './Tab.styles';
import { BrandColor, GenericComponentProps } from '../../types';

export interface TabProps extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  brandColor?: Extract<BrandColor, 'primary' | 'black'>;
  text: string;
  value: number | string;
  selected?: boolean;
  fullWidth?: boolean;
  hideIndicator?: boolean;
}

const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(
  { brandColor = 'black', text, value, selected, fullWidth, hideIndicator, customStyle, ...props },
  ref
) {
  return (
    <StyledTab
      ref={ref}
      brandColor={brandColor}
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
