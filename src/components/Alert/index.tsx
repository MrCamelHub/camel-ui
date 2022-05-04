import React, { forwardRef, PropsWithChildren, HTMLAttributes } from 'react';
import { useTheme } from '@theme';

import {
  GenericComponentProps,
  RequireAtOnlyOneColorProps,
  BrandColor,
  BoxRoundKey
} from '../../types';
import { StyledAlert } from './Alert.styles';

export interface AlertProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  round?: BoxRoundKey;
}

export type AlertPropsWithColor = RequireAtOnlyOneColorProps<
  AlertProps,
  Extract<BrandColor, 'primary-light1' | 'primary-light2' | 'common-grey-light'>
>;

const Alert = forwardRef<HTMLDivElement, PropsWithChildren<AlertPropsWithColor>>(function Alert(
  { children, brandColor = 'primary-light1', customColor, round, customStyle, ...props },
  ref
) {
  const { theme } = useTheme();

  return (
    <StyledAlert
      ref={ref}
      theme={theme}
      brandColor={brandColor}
      customColor={customColor}
      round={round}
      css={customStyle}
      {...props}
    >
      {children}
    </StyledAlert>
  );
});

export default Alert;
