import styled, { CSSObject } from '@emotion/styled';

import { CtaButtonProps, RequireAtOnlyOneIcon, ConditionalSupportColor } from '.';

export const StyledCtaButton = styled.button<
  Pick<
    RequireAtOnlyOneIcon<ConditionalSupportColor<CtaButtonProps>>,
    'variant' | 'color' | 'size' | 'fullWidth'
  >
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 700;
  letter-spacing: -0.2px;

  ${({ theme: { palette }, variant, color }): CSSObject => {
    let cssObject: CSSObject;

    switch (variant) {
      case 'contained':
        cssObject = {
          backgroundColor: palette.primary.main,
          color: palette.common.white,
          '& svg': {
            color: palette.common.white
          }
        };

        if (color === 'black') {
          cssObject = {
            backgroundColor: palette.common.black,
            color: palette.common.white,
            '& svg': {
              color: palette.common.white
            }
          };
        }

        break;
      default:
        cssObject = {
          borderColor: palette.primary.main,
          color: palette.primary.main,
          '& svg': {
            color: palette.primary.main
          }
        };

        if (color === 'grey') {
          cssObject = {
            borderColor: palette.common.grey['40'],
            color: palette.common.grey['20'],
            '& svg': {
              color: palette.common.grey['20']
            }
          };
        }
        break;
    }

    return cssObject;
  }}

  ${({ size }): CSSObject => {
    switch (size) {
      case 'large':
        return {
          height: 48,
          padding: '0 12px',
          lineHeight: '24px',
          fontSize: 16
        };
      default:
        return {
          height: 41,
          padding: '0 10px',
          lineHeight: '21px',
          fontSize: 14
        };
    }
  }};

  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}};

  &:disabled {
    background-color: ${({ theme: { palette } }) => palette.common.grey['80']};
    color: ${({ theme: { palette } }) => palette.common.grey['60']};
    cursor: default;
    & svg {
      color: ${({ theme: { palette } }) => palette.common.grey['60']};
    }
  }
`;
