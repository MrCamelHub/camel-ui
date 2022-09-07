import React, { forwardRef, useEffect, useRef } from 'react';
import type { HTMLAttributes, MouseEvent } from 'react';

import { StyledTabs, TabsInner } from './Tabs.styles';
import { BrandColor, GenericComponentProps } from '../../types';

export interface TabsProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>> {
  brandColor?: Extract<BrandColor, 'primary' | 'black'>;
  onChange: (value: number | string) => void;
  value: number | string;
  fullWidth?: boolean;
  hideIndicator?: boolean;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  {
    children,
    brandColor = 'black',
    fullWidth,
    hideIndicator,
    onChange,
    value,
    customStyle,
    ...props
  },
  ref
) {
  const tabsInnerRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(false);
  const prevValueRef = useRef<number | string>(0);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const dataValue = (event.target as Element).getAttribute('data-value');

    if (!dataValue) return;

    if (!Number.isNaN(Number(dataValue))) {
      onChange(Number(dataValue));
    } else {
      onChange(dataValue);
    }
  };

  useEffect(() => {
    if (tabsInnerRef.current && (!isMountedRef.current || prevValueRef.current !== value)) {
      isMountedRef.current = true;

      const { children: childrenEl } = tabsInnerRef.current;

      for (let i = 0; i < childrenEl.length; i += 1) {
        childrenEl[i].className = childrenEl[i].className.replace(/ selected/g, '');

        const dataValue = childrenEl[i].getAttribute('data-value');

        if (!Number.isNaN(Number(dataValue)) && Number(dataValue) === value) {
          childrenEl[i].className = `${childrenEl[i].className} selected`;
        } else if (dataValue === value) {
          childrenEl[i].className = `${childrenEl[i].className} selected`;
        }
      }
    }

    prevValueRef.current = value;
  }, [value]);

  return (
    <StyledTabs
      ref={ref}
      fullWidth={fullWidth}
      onClick={handleClick}
      {...props}
      css={customStyle}
      role="tablist"
    >
      <TabsInner
        ref={tabsInnerRef}
        brandColor={brandColor}
        fullWidth={fullWidth}
        hideIndicator={hideIndicator}
      >
        {children}
      </TabsInner>
    </StyledTabs>
  );
});

export default Tabs;
