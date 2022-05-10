import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  PropsWithChildren,
  ReactElement,
  HTMLAttributes
} from 'react';

import { Wrapper, StyledTooltip } from './Tooltip.styles';
import type {
  GenericComponentProps,
  BrandColor,
  BrandExtendsColor,
  BoxRoundKey
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
        tooltipOpen={tooltipOpen}
        tooltipClose={!open}
        placement={placement}
        tooltipWidth={tooltipWidth}
        tooltipHeight={tooltipHeight}
        spaceBetween={spaceBetween}
        transitionDuration={transitionDuration}
        triangleLeft={triangleLeft}
        brandColor={brandColor}
        round={round}
        disablePadding={disablePadding}
        disableShadow={disableShadow}
        css={customStyle}
      >
        {message}
      </StyledTooltip>
    </Wrapper>
  );
});

export default Tooltip;
