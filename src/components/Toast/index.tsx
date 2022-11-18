import type { HTMLAttributes, MouseEvent, PropsWithChildren } from 'react';
import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';
import PortalCounterContext from '@theme/provider/PortalCounterContext';

import { StyledToast } from './Toast.styles';
import type { CSSValue, GenericComponentProps } from '../../types';

export interface ToastProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>> {
  open: boolean;
  bottom?: CSSValue;
  edgeSpacing?: number;
  autoHideDuration?: number;
  transitionDuration?: number;
  disablePadding?: boolean;
  onClose: () => void;
}

const Toast = forwardRef<HTMLDivElement, PropsWithChildren<ToastProps>>(function Toast(
  {
    children,
    open,
    bottom = '100px',
    edgeSpacing = 20,
    autoHideDuration = 2000,
    transitionDuration = 225,
    disablePadding,
    onClose,
    customStyle,
    ...props
  },
  ref
) {
  const [count, setCount] = useContext(PortalCounterContext);

  const [isMounted, setIsMounted] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const updatedCountRef = useRef(false);

  const toastPortalRef = useRef<HTMLElement | null>(null);
  const toastOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastAutoHideDurationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    const handleClose = () => {
      updatedCountRef.current = false;
      onClose();
    };

    if (!updatedCountRef.current && open) {
      let toast = document.getElementById(`toast-root-${count}`);

      if (!toast) {
        toast = document.createElement('div');
        toast.id = `toast-root-${count}`;
        toast.setAttribute('role', 'presentation');

        document.body.appendChild(toast);
      }

      toastPortalRef.current = toast;

      setIsMounted(true);

      if (toastCloseTimerRef.current) {
        clearTimeout(toastCloseTimerRef.current);
      }
      if (toastAutoHideDurationTimerRef.current) {
        clearTimeout(toastAutoHideDurationTimerRef.current);
      }

      toastOpenTimerRef.current = setTimeout(() => setToastOpen(true), 100);

      if (autoHideDuration) {
        toastAutoHideDurationTimerRef.current = setTimeout(handleClose, autoHideDuration);
      }
    } else if (!open && isMounted && toastPortalRef.current) {
      if (toastOpenTimerRef.current) {
        clearTimeout(toastOpenTimerRef.current);
      }
      if (toastAutoHideDurationTimerRef.current) {
        clearTimeout(toastAutoHideDurationTimerRef.current);
      }

      toastCloseTimerRef.current = setTimeout(() => {
        updatedCountRef.current = false;
        toastPortalRef.current?.remove();
        toastPortalRef.current = null;

        setToastOpen(false);
        setIsMounted(false);
      }, transitionDuration + 100);
    }
  }, [open, isMounted, autoHideDuration, transitionDuration, onClose, count]);

  useEffect(() => {
    if (toastOpen && setCount && !updatedCountRef.current) {
      setCount((prevCount) => prevCount + 1);
      updatedCountRef.current = true;
    }
  }, [toastOpen, setCount]);

  useEffect(() => {
    return () => {
      if (toastOpenTimerRef.current) {
        clearTimeout(toastOpenTimerRef.current);
      }
      if (toastCloseTimerRef.current) {
        clearTimeout(toastCloseTimerRef.current);
      }
      if (toastAutoHideDurationTimerRef.current) {
        clearTimeout(toastAutoHideDurationTimerRef.current);
      }
      if (toastPortalRef.current) {
        toastPortalRef.current?.remove();
        toastPortalRef.current = null;
      }
    };
  }, []);

  if (isMounted && toastPortalRef.current) {
    return createPortal(
      <StyledToast
        ref={ref}
        toastOpen={toastOpen}
        toastClose={!open}
        bottom={bottom}
        edgeSpacing={edgeSpacing}
        transitionDuration={transitionDuration}
        disablePadding={disablePadding}
        onClick={handleClick}
        css={customStyle}
        {...props}
      >
        {children}
      </StyledToast>,
      toastPortalRef.current
    );
  }

  return null;
});

export default Toast;
