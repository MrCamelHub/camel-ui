import React, { memo, PropsWithChildren, HTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';

import { StyledBox } from './Box.styles';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  customStyle?: SerializedStyles;
}

function Box({ children, customStyle }: PropsWithChildren<BoxProps>) {
  return <StyledBox css={customStyle}>{children}</StyledBox>;
}

export default memo(Box);
