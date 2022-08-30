import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { TooltipProps } from '.';

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

export const StyledTooltip = styled.div<
  Pick<
    TooltipProps,
    | 'variant'
    | 'placement'
    | 'spaceBetween'
    | 'transitionDuration'
    | 'triangleLeft'
    | 'brandColor'
    | 'disablePadding'
    | 'disableShadow'
  > & {
    tooltipOpen: boolean;
    tooltipClose: boolean;
    tooltipWidth: number;
    tooltipHeight: number;
  }
>`
  position: absolute;
  min-width: fit-content;
  padding: 6px 10px;
  border-radius: 16px;
  visibility: hidden;
  opacity: 0;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1)
    0ms;
  pointer-events: none;
  text-align: center;

  ${({ placement, tooltipWidth, tooltipHeight, spaceBetween = 20 }): CSSObject => {
    switch (placement) {
      case 'left':
        return {
          top: '50%',
          left: 0,
          transform: `translate(-${tooltipWidth + spaceBetween}px, -50%);`
        };
      case 'right':
        return {
          top: '50%',
          right: 0,
          transform: `translate(${tooltipWidth + spaceBetween}px, -50%);`
        };
      case 'bottom':
        return {
          left: '50%',
          bottom: 0,
          transform: `translate(-50%, ${tooltipHeight + spaceBetween}px);`
        };
      default:
        return {
          top: 0,
          left: '50%',
          transform: `translate(-50%, -${tooltipHeight + spaceBetween}px);`
        };
    }
  }};

  ${({
    theme: {
      typography: { body2 }
    }
  }): CSSObject => ({
    fontSize: body2.size,
    fontWeight: body2.weight.medium,
    lineHeight: body2.lineHeight,
    letterSpacing: body2.letterSpacing
  })};

  white-space: nowrap;

  filter: drop-shadow(
    ${({
      theme: {
        box: { shadow }
      }
    }) => shadow.tooltip}
  );
  z-index: ${({ theme: { zIndex } }) => zIndex.tooltip};

  ${({ disablePadding }): CSSObject => (disablePadding ? { padding: 0 } : {})}

  ${({ disableShadow }): CSSObject => (disableShadow ? { filter: 'inherit' } : {})}

  ${({ theme, variant, brandColor }): CSSObject => {
    let cssObject: CSSObject = {};

    switch (variant) {
      case 'ghost':
        if (brandColor === 'primary') {
          cssObject = {
            backgroundColor: theme.palette.primary.highlight,
            color: theme.palette.primary.main
          };
        }
        if (brandColor === 'black') {
          cssObject = {
            backgroundColor: theme.palette.common.gray.ui95,
            color: theme.palette.common.gray.ui20
          };
        }
        break;
      default:
        cssObject = {
          backgroundColor: getBrandColorCodeByColorName(theme, brandColor),
          color: theme.palette.common.gray.uiWhite
        };
        break;
    }

    return cssObject;
  }}

  ${({ tooltipOpen }): CSSObject =>
    tooltipOpen
      ? {
          visibility: 'visible',
          opacity: 1,
          pointerEvents: 'visible'
        }
      : {}}
  ${({ tooltipClose }): CSSObject =>
    tooltipClose
      ? {
          opacity: 0
        }
      : {}}

  & > svg {
    content: '';
    position: absolute;

    ${({ placement, triangleLeft }): CSSObject => {
      switch (placement) {
        case 'left':
          return {
            top: '50%',
            right: -7,
            transform: 'translateY(-50%) rotate(90deg)'
          };
        case 'right':
          return {
            top: '50%',
            left: -7,
            transform: 'translateY(-50%) rotate(270deg)'
          };
        case 'bottom':
          return {
            top: -6,
            left: `${triangleLeft ? `${triangleLeft}px` : '50%'}`,
            transform: `${triangleLeft ? 'rotate(0deg)' : 'translateX(-50%) rotate(0deg)'}`
          };
        default:
          return {
            bottom: -6,
            left: `${triangleLeft ? `${triangleLeft}px` : '50%'}`,
            transform: `${triangleLeft ? 'rotate(180deg)' : 'translateX(-50%) rotate(180deg)'}`
          };
      }
    }}

    ${({ theme, variant, brandColor }): CSSObject => {
      switch (variant) {
        case 'ghost':
          if (brandColor === 'primary') {
            return {
              color: theme.palette.primary.highlight
            };
          }
          if (brandColor === 'black') {
            return {
              color: theme.palette.common.gray.ui95
            };
          }
          return {};
        default:
          return {
            color: getBrandColorCodeByColorName(theme, brandColor)
          };
      }
    }}
  }
`;
