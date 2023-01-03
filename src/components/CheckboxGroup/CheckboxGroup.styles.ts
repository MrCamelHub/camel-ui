import styled, { CSSObject } from '@emotion/styled';

import type { CheckboxGroupProps } from '.';

export const StyledCheckboxGroup = styled.div<Pick<CheckboxGroupProps, 'size'>>`
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;

  ${({
    theme: {
      typography: { h4, body1, body2 }
    },
    size
  }): CSSObject => {
    switch (size) {
      case 'large':
        return {
          gap: 8,
          fontSize: h4.size,
          fontWeight: h4.weight.regular,
          lineHeight: h4.lineHeight,
          letterSpacing: h4.letterSpacing
        };
      case 'small':
        return {
          gap: 4,
          fontSize: body2.size,
          fontWeight: body2.weight.regular,
          lineHeight: body2.lineHeight,
          letterSpacing: body2.letterSpacing
        };
      default:
        return {
          gap: 4,
          fontSize: body1.size,
          fontWeight: body1.weight.regular,
          lineHeight: body1.lineHeight,
          letterSpacing: body1.letterSpacing
        };
    }
  }};
`;

export const SubText = styled.span`
  white-space: nowrap;
  color: ${({
    theme: {
      palette: { common }
    }
  }) => common.ui80};
`;
