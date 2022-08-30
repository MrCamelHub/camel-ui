import styled, { CSSObject } from '@emotion/styled';

import { InputProps } from '.';

export const StyledInput = styled.div<
  Pick<InputProps, 'variant' | 'size' | 'fullWidth'> & {
    focused: boolean;
  }
>`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border: 1px solid transparent;
  border-radius: ${({
    theme: {
      box: { round }
    }
  }) => round['8']};
  background-color: ${({
    theme: {
      palette: { common }
    }
  }) => common.gray.uiWhite};
  color: ${({
    theme: {
      palette: { common }
    }
  }) => common.gray.ui20};

  ${({
    theme: {
      typography: { body1, h4, h3, h2 }
    },
    size
  }): CSSObject => {
    switch (size) {
      case 'small':
        return {
          maxHeight: 32,
          gap: 6,
          padding: 6,
          fontSize: body1.size,
          fontWeight: body1.weight.regular,
          lineHeight: body1.lineHeight,
          letterSpacing: body1.letterSpacing,
          '& > svg': {
            minWidth: 20,
            height: 20
          }
        };
      case 'large':
        return {
          maxHeight: 44,
          gap: 12,
          padding: 12,
          fontSize: h4.size,
          fontWeight: h4.weight.regular,
          lineHeight: h4.lineHeight,
          letterSpacing: h4.letterSpacing,
          '& > svg': {
            minWidth: 20,
            height: 20
          }
        };
      case 'xlarge':
        return {
          maxHeight: 52,
          gap: 14,
          padding: 14,
          fontSize: h3.size,
          fontWeight: h3.weight.regular,
          lineHeight: h3.lineHeight,
          letterSpacing: h3.letterSpacing,
          '& > svg': {
            minWidth: 24,
            height: 24
          }
        };
      case 'xxlarge':
        return {
          gap: 14,
          padding: 14,
          fontSize: h2.size,
          fontWeight: h2.weight.regular,
          lineHeight: h2.lineHeight,
          letterSpacing: h2.letterSpacing,
          '& > svg': {
            minWidth: 32,
            height: 32
          }
        };
      default:
        return {
          maxHeight: 36,
          gap: 8,
          padding: 8,
          fontSize: body1.size,
          fontWeight: body1.weight.regular,
          lineHeight: body1.lineHeight,
          letterSpacing: body1.letterSpacing,
          '& > svg': {
            minWidth: 20,
            height: 20
          }
        };
    }
  }};

  ${({
    theme: {
      palette: {
        common: { gray }
      }
    },
    variant,
    size
  }): CSSObject => {
    let cssObject: CSSObject = {};

    switch (variant) {
      case 'outlined':
        cssObject = {
          borderColor: gray.line01
        };
        break;
      case 'contained':
        cssObject = {
          backgroundColor: gray.ui95
        };
        break;
      case 'inline':
        cssObject = {
          borderRadius: 0
        };
        break;
      case 'underline':
        cssObject = {
          borderRadius: 0,
          borderBottomColor: gray.line01,
          borderBottomWidth: 2
        };

        if (size === 'xxlarge') {
          cssObject = {
            ...cssObject,
            gap: 12,
            padding: '14px 0',
            maxHeight: 60
          };
        } else if (size === 'xlarge') {
          cssObject = {
            ...cssObject,
            gap: 8,
            padding: '12px 0',
            maxHeight: 48
          };
        } else if (size === 'large') {
          cssObject = {
            ...cssObject,
            gap: 8,
            padding: '8px 0',
            maxHeight: 36
          };
        } else if (size === 'small') {
          cssObject = {
            ...cssObject,
            gap: 8,
            padding: '4px 0',
            maxHeight: 28
          };
        } else {
          cssObject = {
            ...cssObject,
            gap: 8,
            padding: '6px 0',
            maxHeight: 32
          };
        }
        break;
      default:
        break;
    }

    return cssObject;
  }};

  ${({ fullWidth }): CSSObject => (fullWidth ? { width: '100%' } : {})};

  ${({
    theme: {
      palette: { primary }
    },
    variant,
    focused
  }): CSSObject => {
    if (focused && (variant === 'outlined' || variant === 'contained')) {
      return {
        borderColor: primary.main
      };
    }
    if (focused && variant === 'underline') {
      return {
        borderBottomColor: primary.main
      };
    }
    return {};
  }}
`;

export const BaseInput = styled.input`
  flex-grow: 1;
  outline: 0;
  background-color: transparent;

  &::placeholder {
    color: ${({
      theme: {
        palette: {
          common: { gray }
        }
      }
    }) => gray.ui80};
  }
`;
