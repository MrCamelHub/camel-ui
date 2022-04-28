import styled, { CSSObject } from '@emotion/styled';

import { DefaultButtonProps } from '.';

export const StyledDefaultButton = styled.button<
  Pick<DefaultButtonProps, 'variant' | 'size' | 'round' | 'fullWidth'>
>`
  display: inline-block;
  gap: 9px;
  width: fit-content;
  border: 1px solid transparent;
  font-weight: 500;
  letter-spacing: -0.2px;

  ${({ theme: { palette }, variant }): CSSObject => {
    switch (variant) {
      case 'tertiary':
        return {
          backgroundColor: palette.primary.light1,
          color: palette.primary.main,
          '& svg': {
            color: palette.primary.main
          }
        };
      case 'primary':
        return {
          backgroundColor: palette.common.black,
          color: palette.common.white,
          '& svg': {
            color: palette.common.white
          }
        };
      case 'quaternary':
        return {
          backgroundColor: palette.common.grey['96'],
          color: palette.common.grey['20'],
          '& svg': {
            color: palette.common.grey['20']
          }
        };
      default:
        return {
          backgroundColor: palette.common.white,
          borderColor: palette.common.grey['80'],
          color: palette.common.grey['40'],
          '& > svg': {
            color: palette.common.grey['40']
          }
        };
    }
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
  gap: 9px;
`;
