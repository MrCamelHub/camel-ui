import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

import { StyledTooltip, Wrapper } from './Tooltip.styles';
import type {
  BoxRoundKey,
  BrandColor,
  BrandExtendsColor,
  GenericComponentProps
} from '../../types';

export interface TooltipProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  message: ReactElement | string;
  brandColor?:
    | Extract<BrandColor, 'black'>
    | `${Extract<BrandColor, 'primary'>}-${Extract<BrandExtendsColor, 'highlight'>}`;
  placement?: 'top' | 'left' | 'right' | 'bottom';
  spaceBetween?: number;
  transitionDuration?: number;
  triangleLeft?: number;
  triangleCompact?: boolean;
  round?: Extract<BoxRoundKey, '8' | '16'>;
  disablePadding?: boolean;
  disableShadow?: boolean;
}

const Tooltip = forwardRef<HTMLDivElement, PropsWithChildren<TooltipProps>>(function Tooltip(
  {
    children,
    open,
    message,
    placement = 'top',
    spaceBetween = 20,
    transitionDuration = 225,
    triangleLeft,
    triangleCompact = false,
    brandColor = 'black',
    round = '8',
    disablePadding = false,
    disableShadow = false,
    customStyle,
    ...props
  },
  ref
) {
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const [tooltipWidth, setTooltipWidth] = useState<number>(0);
  const [tooltipHeight, setTooltipHeight] = useState<number>(0);

  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const toolTipCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (open && !isMounted) {
      setIsMounted(true);

      if (toolTipCloseTimerRef.current) {
        clearTimeout(toolTipCloseTimerRef.current);
      }

      setTooltipOpen(true);
    } else if (!open && isMounted && tooltipRef.current) {
      toolTipCloseTimerRef.current = setTimeout(() => {
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

  return (
    <Wrapper ref={ref} {...props}>
      {children}
      <StyledTooltip
        ref={tooltipRef}
        tooltipOpen={tooltipOpen}
        tooltipClose={!open}
        placement={placement}
        tooltipWidth={tooltipWidth}
        tooltipHeight={tooltipHeight}
        spaceBetween={spaceBetween}
        transitionDuration={transitionDuration}
        triangleLeft={triangleLeft}
        triangleCompact={triangleCompact}
        brandColor={brandColor}
        round={round}
        disablePadding={disablePadding}
        disableShadow={disableShadow}
        css={customStyle}
      >
        {message}
        {triangleCompact ? <TriangleCompact /> : <Triangle />}
      </StyledTooltip>
    </Wrapper>
  );
});

function Triangle() {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3730_4994)">
        <path
          d="M24 12L0 12L10.5858 1.41421C11.3668 0.633166 12.6332 0.633166 13.4142 1.41421L24 12Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3730_4994">
          <rect width="24" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TriangleCompact() {
  return (
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.13398 0.499999C6.51888 -0.166667 7.48112 -0.166667 7.86603 0.5L13.0622 9.5C13.4471 10.1667 12.966 11 12.1962 11H1.80385C1.03405 11 0.552922 10.1667 0.937822 9.5L6.13398 0.499999Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Tooltip;
