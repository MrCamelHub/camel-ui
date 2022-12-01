import type { HTMLAttributes, MouseEvent, PropsWithChildren, TouchEvent } from 'react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { StyledDialog, Wrapper } from './Dialog.styles';
import type { GenericComponentProps } from '../../types';

export interface DialogProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>> {
  open: boolean;
  transitionDuration?: number;
  fullWidth?: boolean;
  fullScreen?: boolean;
  disablePadding?: boolean;
  disableFullScreenSwipeable?: boolean;
  onClose?: () => void;
}

const Dialog = forwardRef<HTMLDivElement, PropsWithChildren<DialogProps>>(function Dialog(
  {
    children,
    open,
    transitionDuration = 225,
    fullWidth,
    fullScreen,
    disablePadding,
    disableFullScreenSwipeable = true,
    onClose,
    customStyle,
    ...props
  },
  ref
) {
  const [isMounted, setIsMounted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [swipeable, setSwipeable] = useState(false);

  const dialogPortalRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogOpenTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const dialogCloseTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const dialogSwipeableTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const measureRef = useRef({
    startClientY: 0,
    lastTranslateY: 0
  });

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (disableFullScreenSwipeable || !fullScreen || !dialogRef.current) return;

    measureRef.current.startClientY = event.clientY;
    setSwipeable(true);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!swipeable || !dialogRef.current) return;

    let translateY = event.clientY - measureRef.current.startClientY;

    if (translateY <= 0) {
      translateY = 0;
    }

    dialogRef.current.setAttribute('style', `transform: translateY(${translateY}px)`);
    measureRef.current.lastTranslateY = translateY;
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (disableFullScreenSwipeable || !fullScreen || !dialogRef.current) return;

    if (dialogRef.current.scrollTop > 0) return;

    measureRef.current.startClientY = event.touches[0].clientY;
    setSwipeable(true);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!swipeable || !dialogRef.current) return;

    let translateY = event.touches[0].clientY - measureRef.current.startClientY;

    if (translateY <= 0) {
      translateY = 0;
    }

    dialogRef.current.setAttribute('style', `transform: translateY(${translateY}px)`);
    measureRef.current.lastTranslateY = translateY;
  };

  const handleEndSwipeable = () => {
    if (!swipeable || !dialogRef.current) return;

    const swipedPercentage =
      (measureRef.current.lastTranslateY / (dialogRef.current.clientHeight || 0)) * 100;

    if (swipedPercentage >= 10) {
      dialogRef.current.setAttribute('style', 'transform: translateY(100%)');
      dialogSwipeableTimerRef.current = setTimeout(() => {
        if (onClose && typeof onClose === 'function') onClose();
      }, transitionDuration);
    } else {
      dialogRef.current.removeAttribute('style');
    }

    setSwipeable(false);
    measureRef.current = {
      startClientY: 0,
      lastTranslateY: 0
    };
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';

      let dialog = document.getElementById('dialog-root');

      if (!dialog) {
        dialog = document.createElement('div');
        dialog.id = 'dialog-root';
        dialog.style.position = 'fixed';
        dialog.style.top = '0';
        dialog.style.left = '0';
        dialog.style.width = '100%';
        dialog.style.height = '100%';
        dialog.style.zIndex = '20';
        dialog.setAttribute('role', 'presentation');

        document.body.appendChild(dialog);
      }

      dialogPortalRef.current = dialog;

      setIsMounted(true);

      if (dialogCloseTimerRef.current) {
        clearTimeout(dialogCloseTimerRef.current);
      }

      dialogOpenTimerRef.current = setTimeout(() => setDialogOpen(true), 100);
    }
  }, [open]);

  useEffect(() => {
    if (!open && dialogOpen && dialogPortalRef.current) {
      if (dialogOpenTimerRef.current) {
        clearTimeout(dialogOpenTimerRef.current);
      }

      dialogCloseTimerRef.current = setTimeout(() => {
        dialogPortalRef.current?.remove();
        dialogPortalRef.current = null;

        setIsMounted(false);
        setDialogOpen(false);

        document.body.removeAttribute('style');
        measureRef.current = {
          startClientY: 0,
          lastTranslateY: 0
        };
      }, transitionDuration + 100);
    }
  }, [open, dialogOpen, transitionDuration]);

  useEffect(() => {
    return () => {
      if (dialogOpenTimerRef.current) {
        clearTimeout(dialogOpenTimerRef.current);
      }
      if (dialogCloseTimerRef.current) {
        clearTimeout(dialogCloseTimerRef.current);
      }
      if (dialogSwipeableTimerRef.current) {
        clearTimeout(dialogSwipeableTimerRef.current);
      }
      if (dialogPortalRef.current) {
        dialogPortalRef.current.remove();
        dialogPortalRef.current = null;
      }
      document.body.removeAttribute('style');
      measureRef.current = {
        startClientY: 0,
        lastTranslateY: 0
      };
    };
  }, []);

  if (isMounted && dialogPortalRef.current) {
    return createPortal(
      <Wrapper
        ref={ref}
        dialogOpen={dialogOpen}
        dialogClose={!open}
        transitionDuration={transitionDuration}
        fullScreen={fullScreen}
        onClick={onClose}
      >
        <StyledDialog
          ref={dialogRef}
          dialogOpen={dialogOpen}
          dialogClose={!open}
          transitionDuration={transitionDuration}
          fullWidth={fullWidth}
          fullScreen={fullScreen}
          disablePadding={disablePadding}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleEndSwipeable}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleEndSwipeable}
          {...props}
          css={customStyle}
          role="dialog"
        >
          {children}
        </StyledDialog>
      </Wrapper>,
      dialogPortalRef.current
    );
  }

  return null;
});

export default Dialog;
