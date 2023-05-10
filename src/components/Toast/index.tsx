import type { HTMLAttributes, MouseEvent, PropsWithChildren } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import type { CSSValue, GenericComponentProps } from '../../types';
import { StyledToast } from './Toast.styles';

export interface ToastProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>> {
  open: boolean;
  bottom?: CSSValue;
  edgeSpacing?: number;
  autoHideDuration?: number;
  transitionDuration?: number;
  fullWidth?: boolean;
  disablePadding?: boolean;
  onClose?: () => void;
}

const Toast = forwardRef<HTMLDivElement, PropsWithChildren<ToastProps>>(function Toast(
  {
    children,
    open,
    bottom = '100px',
    edgeSpacing = 20,
    autoHideDuration = 2000,
    transitionDuration = 225,
    fullWidth,
    disablePadding,
    onClose,
    customStyle,
    ...props
  },
  ref
) {
  const [isMounted, setIsMounted] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const updatedCountRef = useRef(false);

  const toastPortalRef = useRef<HTMLElement | null>(null);
  const toastOpenTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const toastCloseTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const toastAutoHideDurationTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    const handleClose = () => {
      updatedCountRef.current = false;
      if (onClose && typeof onClose === 'function') onClose();
    };

    if (!updatedCountRef.current && open) {
      let toast = document.getElementById('toast-root');

      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-root';
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
  }, [open, isMounted, autoHideDuration, transitionDuration, onClose]);

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
        fullWidth={fullWidth}
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
