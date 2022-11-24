import styled, { CSSObject } from '@emotion/styled';

import type { RadioGroupProps } from '.';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: fit-content;
`;

export const StyledRadioGroup = styled.div<Pick<RadioGroupProps, 'size'>>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  ${({
    theme: {
      typography: { h4, body1, body2 }
    },
    size
  }): CSSObject => {
    switch (size) {
      case 'large':
        return {
          fontSize: h4.size,
          fontWeight: h4.weight.regular,
          lineHeight: h4.lineHeight,
          letterSpacing: h4.letterSpacing
        };
      case 'small':
        return {
          fontSize: body2.size,
          fontWeight: body2.weight.regular,
          lineHeight: body2.lineHeight,
          letterSpacing: body2.letterSpacing
        };
      default:
        return {
          fontSize: body1.size,
          fontWeight: body1.weight.regular,
          lineHeight: body1.lineHeight,
          letterSpacing: body1.letterSpacing
        };
    }
  }};
`;

export const SubText = styled.span<Pick<RadioGroupProps, 'size'>>`
  margin-left: ${({ size }) => (size === 'small' ? -6 : -4)}px;
  color: ${({
    theme: {
      palette: { common }
    }
  }) => common.ui80};
`;
