import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  PropsWithChildren,
  HTMLAttributes,
  MouseEvent
} from 'react';
import { createPortal } from 'react-dom';

import { GenericComponentProps, CSSValue } from '../../types';
import { Wrapper, StyledToast } from './Toast.styles';

export interface ToastProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>> {
  open: boolean;
  bottom?: CSSValue;
  autoHideDuration?: number;
  transitionDuration?: number;
  onClose: () => void;
}

const Toast = forwardRef<HTMLDivElement, PropsWithChildren<ToastProps>>(function Toast(
  {
    children,
    open,
    bottom = '100px',
    autoHideDuration,
    transitionDuration = 225,
    onClose,
    customStyle,
    ...props
  },
  ref
) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [toastOpen, setToastOpen] = useState<boolean>(false);

  const toastRef = useRef<HTMLElement | null>(null);
  const toastOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastAutoHideDurationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    if (open && !isMounted) {
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

      toastRef.current = toast;

      if (toastCloseTimerRef.current) {
        clearTimeout(toastCloseTimerRef.current);
      }
      if (toastAutoHideDurationTimerRef.current) {
        clearTimeout(toastAutoHideDurationTimerRef.current);
      }

      toastOpenTimerRef.current = setTimeout(() => setToastOpen(true), 100);
    } else if (!open && isMounted && toastRef.current) {
      if (toastOpenTimerRef.current) {
        clearTimeout(toastOpenTimerRef.current);
      }
      if (toastAutoHideDurationTimerRef.current) {
        clearTimeout(toastAutoHideDurationTimerRef.current);
      }

      toastCloseTimerRef.current = setTimeout(() => {
        toastRef.current?.remove();
        toastRef.current = null;

        setToastOpen(false);
        setIsMounted(false);
      }, transitionDuration + 100);
    }
  }, [open, isMounted, autoHideDuration, transitionDuration, onClose]);

  useEffect(() => {
    if (open && isMounted && autoHideDuration) {
      toastAutoHideDurationTimerRef.current = setTimeout(onClose, autoHideDuration);
    }
  }, [open, isMounted, autoHideDuration, onClose]);

  if (isMounted && toastRef.current) {
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
          onClick={handleClick}
          css={customStyle}
          {...props}
        >
          {children}
        </StyledToast>
      </Wrapper>,
      toastRef.current
    );
  }

  return null;
});

export default Toast;
