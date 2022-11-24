import type { HTMLAttributes, MouseEvent } from 'react';
import React, { forwardRef, useEffect, useRef } from 'react';

import { StyledTabGroup, TabGroupInner } from './TabGroup.styles';
import type { BrandColor, GenericComponentProps } from '../../types';

export interface TabGroupProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>> {
  brandColor?: Extract<BrandColor, 'primary' | 'black'>;
  onChange: (value: number | string, event: MouseEvent<HTMLDivElement>) => void;
  value: number | string;
  fullWidth?: boolean;
  hideIndicator?: boolean;
}

const TabGroup = forwardRef<HTMLDivElement, TabGroupProps>(function Tabs(
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
      onChange(Number(dataValue), event);
    } else {
      onChange(dataValue, event);
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
    <StyledTabGroup
      ref={ref}
      fullWidth={fullWidth}
      onClick={handleClick}
      {...props}
      css={customStyle}
      role="tablist"
    >
      <TabGroupInner
        ref={tabsInnerRef}
        brandColor={brandColor}
        fullWidth={fullWidth}
        hideIndicator={hideIndicator}
      >
        {children}
      </TabGroupInner>
    </StyledTabGroup>
  );
});

export default TabGroup;
