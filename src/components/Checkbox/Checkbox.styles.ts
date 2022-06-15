import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { CheckboxProps } from '.';

export const Wrapper = styled.div<
  Pick<CheckboxProps, 'variant' | 'checked' | 'brandColor' | 'disabled'>
>`
  position: relative;
  display: inline-block;
  width: 22px;
  height: 22px;
  background-color: ${({ theme: { palette } }) => palette.common.white};

  ${({ theme, variant, brandColor }): CSSObject => {
    let cssObject: CSSObject = {};

    switch (variant) {
      case 'circle': {
        cssObject.borderRadius = '50%';

        if (brandColor === 'black') {
          cssObject.border = `1px solid ${theme.palette.common.grey['60']}`;
        }

        if (brandColor === 'primary') {
          cssObject.border = `1px solid ${getBrandColorCodeByColorName(theme, brandColor)}`;
        }

        break;
      }
      default: {
        if (brandColor === 'black') {
          cssObject = {
            border: `1px solid ${theme.palette.common.grey['60']}`,
            borderRadius: 4
          };
        }

        if (brandColor === 'primary') {
          cssObject = {
            border: `1px solid ${theme.palette.primary.light}`,
            borderRadius: 4
          };
        }

        break;
      }
    }

    return cssObject;
  }}

  ${({ theme, brandColor, checked }): CSSObject =>
    checked
      ? {
          borderColor: 'transparent',
          backgroundColor: getBrandColorCodeByColorName(theme, brandColor)
        }
      : {}}
`;

export const StyledCheckbox = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

export const Marker = styled.div<Pick<CheckboxProps, 'variant' | 'checked' | 'brandColor'>>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 9px;
    transform: translate(-50%, calc(-50% - 1px)) rotate(45deg);
    border: solid;
    border-width: 0 1.5px 1.5px 0;
    
    ${({ theme, variant, brandColor }): CSSObject => {
      const cssObject: CSSObject = {};
      switch (variant) {
        case 'circle':
          cssObject.borderColor = getBrandColorCodeByColorName(theme, brandColor);

          break;
        default:
          cssObject.borderColor = theme.palette.common.white;

          break;
      }

      return cssObject;
    }}
    
    ${({ theme: { palette }, checked }): CSSObject =>
      checked
        ? {
            borderColor: palette.common.white
          }
        : {}}
`;
