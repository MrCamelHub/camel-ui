import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  PropsWithChildren,
  ReactElement,
  HTMLAttributes
} from 'react';
import { useTheme } from '@theme';

import {
  GenericComponentProps,
  RequireAtOnlyOneColorProps,
  BrandColor,
  BoxRoundKey
} from '../../types';
import { Wrapper, StyledTooltip } from './Tooltip.styles';

export interface BaseTooltipProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  message: ReactElement | string;
  placement?: 'top' | 'left' | 'right' | 'bottom';
  spaceBetween?: number;
  transitionDuration?: number;
  triangleLeft?: number;
  round?: BoxRoundKey;
}

export type TooltipProps = RequireAtOnlyOneColorProps<BaseTooltipProps, BrandColor>;

const Tooltip = forwardRef<HTMLDivElement, PropsWithChildren<TooltipProps>>(function Tooltip(
  {
    children,
    open,
    message,
    placement = 'top',
    spaceBetween = 20,
    transitionDuration = 225,
    triangleLeft,
    brandColor = 'common-black',
    customColor,
    round = '8',
    customStyle,
    ...props
  },
  ref
) {
  const { theme } = useTheme();

  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const [tooltipWidth, setTooltipWidth] = useState<number>(0);
  const [tooltipHeight, setTooltipHeight] = useState<number>(0);

  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const toolTipOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toolTipCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (open && !isMounted) {
      setIsMounted(true);

      if (toolTipCloseTimerRef.current) {
        clearTimeout(toolTipCloseTimerRef.current);
      }

      toolTipOpenTimerRef.current = setTimeout(() => setTooltipOpen(true), 100);
    } else if (!open && isMounted && tooltipRef.current) {
      if (toolTipOpenTimerRef.current) {
        clearTimeout(toolTipOpenTimerRef.current);
      }

      toolTipCloseTimerRef.current = setTimeout(() => {
        setTooltipOpen(false);
        setIsMounted(false);
      }, transitionDuration + 100);
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
        theme={theme}
        tooltipOpen={tooltipOpen}
        tooltipClose={!open}
        placement={placement}
        tooltipWidth={tooltipWidth}
        tooltipHeight={tooltipHeight}
        spaceBetween={spaceBetween}
        transitionDuration={transitionDuration}
        triangleLeft={triangleLeft}
        brandColor={brandColor}
        customColor={customColor}
        round={round}
        css={customStyle}
      >
        {message}
      </StyledTooltip>
    </Wrapper>
  );
});

export default Tooltip;
