import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { HTMLAttributes, MouseEvent, PropsWithChildren } from 'react';

import { createPortal } from 'react-dom';

import { StyledToast, Wrapper } from './Toast.styles';
import type { CSSValue, GenericComponentProps } from '../../types';

export interface ToastProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>> {
  open: boolean;
  bottom?: CSSValue;
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
    autoHideDuration,
    transitionDuration = 225,
    disablePadding,
    onClose,
    customStyle,
    ...props
  },
  ref
) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [toastOpen, setToastOpen] = useState<boolean>(false);

  const toastPortalRef = useRef<HTMLElement | null>(null);
  const toastOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastAutoHideDurationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    if (open) {
      let toast = document.getElementById('toast-root');

      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-root';
        toast.style.position = 'fixed';
        toast.style.top = '0';
        toast.style.left = '0';
        toast.style.width = '100%';
        toast.style.height = '100%';
        toast.style.zIndex = '1000';
        toast.setAttribute('role', 'presentation');

        document.body.appendChild(toast);
      }

      setIsMounted(true);

      toastPortalRef.current = toast;

      if (toastCloseTimerRef.current) {
        clearTimeout(toastCloseTimerRef.current);
      }
      if (toastAutoHideDurationTimerRef.current) {
        clearTimeout(toastAutoHideDurationTimerRef.current);
      }

      toastOpenTimerRef.current = setTimeout(() => setToastOpen(true), 100);
    } else if (!open && isMounted && toastPortalRef.current) {
      if (toastOpenTimerRef.current) {
        clearTimeout(toastOpenTimerRef.current);
      }
      if (toastAutoHideDurationTimerRef.current) {
        clearTimeout(toastAutoHideDurationTimerRef.current);
      }

      toastCloseTimerRef.current = setTimeout(() => {
        toastPortalRef.current?.remove();
        toastPortalRef.current = null;

        setToastOpen(false);
        setIsMounted(false);
      }, transitionDuration + 100);
    }
  }, [open, isMounted, autoHideDuration, transitionDuration, onClose]);

  useEffect(() => {
    if (open && isMounted && toastOpen && autoHideDuration) {
      toastAutoHideDurationTimerRef.current = setTimeout(onClose, autoHideDuration);
    }
  }, [open, isMounted, toastOpen, autoHideDuration, onClose]);

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
      <Wrapper
        ref={ref}
        toastOpen={toastOpen}
        toastClose={!open}
        transitionDuration={transitionDuration}
        onClick={onClose}
      >
        <StyledToast
          toastOpen={toastOpen}
          toastClose={!open}
          bottom={bottom}
          transitionDuration={transitionDuration}
          disablePadding={disablePadding}
          onClick={handleClick}
          css={customStyle}
          {...props}
        >
          {children}
        </StyledToast>
      </Wrapper>,
      toastPortalRef.current
    );
  }

  return null;
});

export default Toast;
