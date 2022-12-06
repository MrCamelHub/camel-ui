import type { HTMLAttributes, MouseEvent } from 'react';
import React, { forwardRef, useEffect, useRef } from 'react';

import { StyledTabGroup, TabGroupInner } from './TabGroup.styles';
import type { BrandColor, GenericComponentProps, Size } from '../../types';

export interface TabGroupProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>> {
  brandColor?: Extract<BrandColor, 'primary' | 'black'>;
  size?: Extract<Size, 'large' | 'xlarge'>;
  onChange: (value: number | string, event: MouseEvent<HTMLDivElement>) => void;
  value: number | string;
  fullWidth?: boolean;
  hideIndicator?: boolean;
  hideLine?: boolean;
}

const TabGroup = forwardRef<HTMLDivElement, TabGroupProps>(function Tabs(
  {
    children,
    brandColor = 'black',
    size = 'large',
    fullWidth,
    hideIndicator,
    hideLine,
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
      onChange(Number(dataValue), event);
    } else {
      onChange(dataValue, event);
    }
  };

  useEffect(() => {
    if (tabsInnerRef.current) {
      const { children: childrenEl } = tabsInnerRef.current;

      for (let i = 0; i < childrenEl.length; i += 1) {
        childrenEl[i].className = childrenEl[i].className
          .replace(/ size-large/g, '')
          .replace(/ size-xlarge/g, '');

        childrenEl[i].className = `${childrenEl[i].className} size-${size}`;
      }
    }
  }, [size, value]);

  useEffect(() => {
    if (tabsInnerRef.current && (!isMountedRef.current || prevValueRef.current !== value)) {
      isMountedRef.current = true;

      const { children: childrenEl } = tabsInnerRef.current;

      for (let i = 0; i < childrenEl.length; i += 1) {
        childrenEl[i].className = childrenEl[i].className
          .replace(/ selected/g, '')
          .replace(/ size-large/g, '')
          .replace(/ size-xlarge/g, '');

        childrenEl[i].className = `${childrenEl[i].className} size-${size}`;

        const dataValue = childrenEl[i].getAttribute('data-value');

        if (!Number.isNaN(Number(dataValue)) && Number(dataValue) === value) {
          childrenEl[i].className = `${childrenEl[i].className} selected`;
        } else if (dataValue === value) {
          childrenEl[i].className = `${childrenEl[i].className} selected`;
        }
      }
    }

    prevValueRef.current = value;
  }, [value, size]);

  return (
    <StyledTabGroup ref={ref} onClick={handleClick} {...props} css={customStyle} role="tablist">
      <TabGroupInner
        ref={tabsInnerRef}
        brandColor={brandColor}
        fullWidth={fullWidth}
        hideIndicator={hideIndicator}
        hideLine={hideLine}
      >
        {children}
      </TabGroupInner>
    </StyledTabGroup>
  );
});

export default TabGroup;
