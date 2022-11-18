import type { HTMLAttributes, MouseEvent, PropsWithChildren, TouchEvent } from 'react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { Content, Rectangle, StyledBottomSheet, SwipeZone, Wrapper } from './BottomSheet.styles';
import type { GenericComponentProps } from '../../types';

export interface BottomSheetProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  transitionDuration?: number;
  disableSwipeable?: boolean;
  disableContentSwipeable?: boolean;
  onClose: () => void;
}

const BottomSheet = forwardRef<HTMLDivElement, PropsWithChildren<BottomSheetProps>>(
  function BottomSheet(
    {
      children,
      open,
      transitionDuration = 225,
      disableSwipeable,
      disableContentSwipeable = true,
      onClose,
      customStyle,
      ...props
    },
    ref
  ) {
    const [isMounted, setIsMounted] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [swipeable, setSwipeable] = useState(false);
    const [swipeableContent, setSwipeableContent] = useState<boolean>(false);

    const sheetPortalRef = useRef<HTMLElement | null>(null);
    const sheetRef = useRef<HTMLDivElement>(null);
    const sheetSwipeZoneRef = useRef<HTMLDivElement>(null);
    const sheetOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const sheetCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const measureRef = useRef({
      startClientY: 0,
      lastTranslateY: 0
    });

    const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

    const handleMouseDown = () => setSwipeable(true);

    const handleMouseDownContent = (event: MouseEvent<HTMLDivElement>) => {
      if (disableContentSwipeable || !contentRef.current || contentRef.current.scrollTop > 0)
        return;

      measureRef.current.startClientY = event.clientY;
      setSwipeableContent(true);
    };

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      if ((!swipeable && !swipeableContent) || !sheetRef.current) return;
      event.preventDefault();

      let translateY = 0;

      if (swipeable) {
        translateY =
          event.clientY - (document.body.clientHeight - (sheetRef.current.clientHeight || 0));
      } else if (swipeableContent) {
        translateY = event.clientY - measureRef.current.startClientY;
      }

      if (translateY <= 0) {
        translateY = 0;
      }

      sheetRef.current.setAttribute('style', `transform: translateY(${translateY}px)`);
      measureRef.current.lastTranslateY = translateY;
    };

    const handleTouchStart = () => setSwipeable(true);

    const handleTouchStartContent = (event: TouchEvent<HTMLDivElement>) => {
      if (disableContentSwipeable || !contentRef.current || contentRef.current.scrollTop > 0)
        return;

      measureRef.current.startClientY = event.touches[0].clientY;
      setSwipeableContent(true);
    };

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
      if ((!swipeable && !swipeableContent) || !sheetRef.current) return;

      let translateY = 0;

      if (swipeable) {
        translateY =
          event.touches[0].clientY -
          (document.body.clientHeight - (sheetRef.current.clientHeight || 0));
      } else if (swipeableContent) {
        translateY = event.touches[0].clientY - measureRef.current.startClientY;
      }

      if (translateY <= 0) {
        translateY = 0;
      }

      sheetRef.current.setAttribute('style', `transform: translateY(${translateY}px)`);
      measureRef.current.lastTranslateY = translateY;
    };

    const handleEndSwipeable = () => {
      if ((swipeable || swipeableContent) && sheetRef.current) {
        const swipedPercentage =
          (measureRef.current.lastTranslateY / (sheetRef.current.clientHeight || 0)) * 100;

        sheetRef.current.removeAttribute('style');

        if (swipedPercentage >= 15) {
          onClose();
        }
      }

      setSwipeable(false);
      setSwipeableContent(false);
      measureRef.current = {
        startClientY: 0,
        lastTranslateY: 0
      };
    };

    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';

        let sheet = document.getElementById('sheet-root');

        if (!sheet) {
          sheet = document.createElement('div');
          sheet.id = 'sheet-root';
          sheet.style.position = 'fixed';
          sheet.style.top = '0';
          sheet.style.left = '0';
          sheet.style.width = '100%';
          sheet.style.height = '100%';
          sheet.style.zIndex = '20';
          sheet.setAttribute('role', 'presentation');

          document.body.appendChild(sheet);
        }

        sheetPortalRef.current = sheet;

        setIsMounted(true);

        if (sheetCloseTimerRef.current) {
          clearTimeout(sheetCloseTimerRef.current);
        }

        sheetOpenTimerRef.current = setTimeout(() => setSheetOpen(true), 100);
      }
    }, [open]);

    useEffect(() => {
      if (!open && sheetOpen && sheetPortalRef.current) {
        if (sheetOpenTimerRef.current) {
          clearTimeout(sheetOpenTimerRef.current);
        }

        sheetCloseTimerRef.current = setTimeout(() => {
          sheetPortalRef.current?.remove();
          sheetPortalRef.current = null;

          setIsMounted(false);
          setSheetOpen(false);
          setSwipeable(false);

          document.body.removeAttribute('style');
          measureRef.current = {
            startClientY: 0,
            lastTranslateY: 0
          };
        }, transitionDuration + 100);
      }
    }, [open, sheetOpen, transitionDuration]);

    useEffect(() => {
      return () => {
        if (sheetOpenTimerRef.current) {
          clearTimeout(sheetOpenTimerRef.current);
        }
        if (sheetCloseTimerRef.current) {
          clearTimeout(sheetCloseTimerRef.current);
        }
        if (sheetPortalRef.current) {
          sheetPortalRef.current?.remove();
          sheetPortalRef.current = null;
        }
        document.body.removeAttribute('style');
        measureRef.current = {
          startClientY: 0,
          lastTranslateY: 0
        };
      };
    }, []);

    if (isMounted && sheetPortalRef.current) {
      return createPortal(
        <Wrapper
          ref={ref}
          sheetOpen={sheetOpen}
          sheetClose={!open}
          transitionDuration={transitionDuration}
          onClick={onClose}
          onMouseMove={handleMouseMove}
          onMouseUp={handleEndSwipeable}
        >
          <StyledBottomSheet
            ref={sheetRef}
            sheetOpen={sheetOpen}
            sheetClose={!open}
            transitionDuration={transitionDuration}
            onClick={handleClick}
            css={customStyle}
          >
            {!disableSwipeable && (
              <SwipeZone
                ref={sheetSwipeZoneRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleEndSwipeable}
              >
                <Rectangle />
              </SwipeZone>
            )}
            <Content
              {...props}
              ref={contentRef}
              onMouseDown={handleMouseDownContent}
              onTouchStart={handleTouchStartContent}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleEndSwipeable}
            >
              {children}
            </Content>
          </StyledBottomSheet>
        </Wrapper>,
        sheetPortalRef.current
      );
    }

    return null;
  }
);

export default BottomSheet;
