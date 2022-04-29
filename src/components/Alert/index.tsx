import React, { memo, PropsWithChildren, HTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps, ComponentColor, CSSValue } from '../../types';
import { StyledAlert } from './Alert.styles';

export interface AlertProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: Extract<ComponentColor, 'primary-light1' | 'primary-light2' | 'grey-light'>;
  round?: CSSValue;
}

function Alert({
  children,
  color = 'primary-light1',
  round,
  customStyle,
  ...props
}: PropsWithChildren<AlertProps>) {
  const { theme } = useTheme();

  return (
    <StyledAlert theme={theme} color={color} round={round} css={customStyle} {...props}>
      {children}
    </StyledAlert>
  );
}

export default memo(Alert);
