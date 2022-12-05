import type { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';

import { StyledTooltip, Wrapper } from './Tooltip.styles';
import type { BrandColor, GenericComponentProps, Variant } from '../../types';

export interface TooltipProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  variant?: Extract<Variant, 'solid' | 'ghost'>;
  open: boolean;
  message: ReactElement | string;
  brandColor?: Extract<BrandColor, 'black' | 'primary'>;
  placement?: 'top' | 'left' | 'right' | 'bottom';
  spaceBetween?: number;
  transitionDuration?: number;
  triangleLeft?: number;
  disablePadding?: boolean;
  disableShadow?: boolean;
}

const Tooltip = forwardRef<HTMLDivElement, PropsWithChildren<TooltipProps>>(function Tooltip(
  {
    children,
    variant = 'solid',
    open,
    message,
    placement = 'top',
    spaceBetween = 20,
    transitionDuration = 225,
    triangleLeft,
    brandColor = 'black',
    disablePadding,
    disableShadow = true,
    customStyle,
    ...props
  },
  ref
) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [tooltipWidth, setTooltipWidth] = useState(0);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipOpenTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const tooltipCloseTimerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (open && !isMounted) {
      setIsMounted(true);

      if (tooltipOpenTimerRef.current) {
        clearTimeout(tooltipOpenTimerRef.current);
      }

      setTooltipOpen(true);
      tooltipOpenTimerRef.current = setTimeout(() => setTooltipOpen(true), 100);
    } else if (!open && isMounted && tooltipRef.current) {
      if (tooltipOpenTimerRef.current) {
        clearTimeout(tooltipOpenTimerRef.current);
      }

      tooltipCloseTimerRef.current = setTimeout(() => {
        setTooltipOpen(false);
        setIsMounted(false);
      }, transitionDuration);
    }
  }, [open, isMounted, transitionDuration]);

  useEffect(() => {
    if (isMounted && tooltipRef.current) {
      const { clientWidth, clientHeight } = tooltipRef.current;

      setTooltipWidth(clientWidth);
      setTooltipHeight(clientHeight);
    }
  }, [isMounted]);

  useEffect(() => {
    return () => {
      if (tooltipOpenTimerRef.current) {
        clearTimeout(tooltipOpenTimerRef.current);
      }
      if (tooltipCloseTimerRef.current) {
        clearTimeout(tooltipCloseTimerRef.current);
      }
    };
  }, []);

  return (
    <Wrapper ref={ref} {...props}>
      {children}
      <StyledTooltip
        ref={tooltipRef}
        variant={variant}
        tooltipOpen={tooltipOpen}
        tooltipClose={!open}
        placement={placement}
        tooltipWidth={tooltipWidth}
        tooltipHeight={tooltipHeight}
        spaceBetween={spaceBetween}
        transitionDuration={transitionDuration}
        triangleLeft={triangleLeft}
        brandColor={brandColor}
        disablePadding={disablePadding}
        disableShadow={disableShadow}
        css={customStyle}
      >
        {message}
        <Triangle />
      </StyledTooltip>
    </Wrapper>
  );
});

function Triangle() {
  return (
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 0L0.5 6L8.5 6L4.5 0Z" fill="currentColor" />
    </svg>
  );
}

export default Tooltip;
