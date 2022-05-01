import React, { memo, PropsWithChildren, HTMLAttributes } from 'react';
import { useTheme } from '@theme';

import {
  GenericComponentProps,
  RequireAtOnlyOneColorProps,
  BrandColor,
  CSSValue
} from '../../types';
import { StyledAlert } from './Alert.styles';

export interface AlertProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  round?: CSSValue;
}

export type AlertPropsWithColor = RequireAtOnlyOneColorProps<
  AlertProps,
  Extract<BrandColor, 'primary-light1' | 'primary-light2' | 'grey-light'>
>;

function Alert({
  children,
  brandColor = 'primary-light1',
  customColor,
  round,
  customStyle,
  ...props
}: PropsWithChildren<AlertPropsWithColor>) {
  const { theme } = useTheme();

  return (
    <StyledAlert
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
}

export default memo(Alert);
