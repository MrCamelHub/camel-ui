import styled, { CSSObject } from '@emotion/styled';

import { DefaultButtonProps, RequireAtOnlyOneIcon, ConditionalSupportColor } from '.';

export const StyledDefaultButton = styled.button<
  Pick<
    RequireAtOnlyOneIcon<ConditionalSupportColor<DefaultButtonProps>>,
    'variant' | 'color' | 'size' | 'round' | 'fullWidth'
  >
>`
  display: inline-block;
  gap: 9px;
  width: fit-content;
  border: 1px solid transparent;
  font-weight: 500;
  letter-spacing: -0.2px;

  ${({ theme: { palette }, variant, color }): CSSObject => {
    let cssObject: CSSObject;

    switch (variant) {
      case 'contained':
        cssObject = {
          backgroundColor: palette.primary.light1,
          color: palette.primary.main,
          '& svg': {
            color: palette.primary.main
          }
        };

        if (color === 'grey') {
          cssObject = {
            backgroundColor: palette.common.grey['20'],
            color: palette.common.white,
            '& svg': {
              color: palette.common.white
            }
          };
        }

        if (color === 'grey-light') {
          cssObject = {
            backgroundColor: palette.common.grey['96'],
            color: palette.common.grey['20'],
            '& svg': {
              color: palette.common.grey['20']
            }
          };
        }

        break;
      default:
        cssObject = {
          backgroundColor: palette.common.white,
          borderColor: palette.common.grey['80'],
          color: palette.common.grey['40'],
          '& > svg': {
            color: palette.common.grey['40']
          }
        };
        break;
    }

    return cssObject;
  }}

  ${({ size }): CSSObject => {
    switch (size) {
      case 'xsmall':
        return {
          height: 25,
          padding: '0 8px',
          lineHeight: '15px',
          fontSize: 10,
          borderRadius: 14
        };
      case 'small':
        return {
          height: 30,
          padding: '0 10px',
          lineHeight: '18px',
          fontSize: 12,
          borderRadius: 18
        };
      case 'large':
        return {
          height: 45,
          padding: '0 16px',
          lineHeight: '27px',
          fontSize: 18,
          borderRadius: 23
        };
      case 'xlarge':
        return {
          height: 60,
          padding: '0 22px',
          lineHeight: '36px',
          fontSize: 24,
          borderRadius: 36
        };
      default:
        return {
          height: 35,
          padding: '0 12px',
          lineHeight: '21px',
          fontSize: 14,
          borderRadius: 19
        };
    }
  }}

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}}
  
  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}}
`;

export const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
`;
