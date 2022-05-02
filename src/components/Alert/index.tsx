import React, { memo, PropsWithChildren, HTMLAttributes } from 'react';
import { useTheme } from '@theme';

import {
  GenericComponentProps,
  RequireAtOnlyOneColorProps,
  BrandColor,
  BoxRoundKey
} from '../../types';
import { StyledAlert } from './Alert.styles';

export interface AlertProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  round?: BoxRoundKey;
}

export type AlertPropsWithColor = RequireAtOnlyOneColorProps<
  AlertProps,
  Extract<BrandColor, 'primary-light1' | 'primary-light2' | 'common-grey-light'>
>;

function Alert({
  children,
  componentRef,
  brandColor = 'primary-light1',
  customColor,
  round,
  customStyle,
  ...props
}: PropsWithChildren<AlertPropsWithColor>) {
  const { theme } = useTheme();

  return (
    <StyledAlert
      ref={componentRef}
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
