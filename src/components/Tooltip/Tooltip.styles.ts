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
    | 'placement'
    | 'spaceBetween'
    | 'transitionDuration'
    | 'triangleLeft'
    | 'brandColor'
    | 'round'
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
  min-width: 100px;
  visibility: hidden;
  opacity: 0;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1)
    0ms;
  pointer-events: none;

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
  }}

  white-space: nowrap;

  ${({
    theme: {
      box: { round: boxRound }
    },
    round
  }): CSSObject =>
    round
      ? {
          borderRadius: boxRound[round]
        }
      : {}}

  ${({ round }): CSSObject => {
    switch (round) {
      case '16':
        return {
          padding: '8px 16px'
        };
      default:
        return {
          padding: 16
        };
    }
  }}
  
  filter: drop-shadow(${({
    theme: {
      box: { shadow }
    }
  }) => shadow.tooltip});
  z-index: ${({ theme: { zIndex } }) => zIndex.tooltip};

  ${({ disablePadding }): CSSObject => (disablePadding ? { padding: 0 } : {})}

  ${({ disableShadow }): CSSObject => (disableShadow ? { filter: 'inherit' } : {})}

  ${({ theme, brandColor }): CSSObject => {
    let brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    if (brandColor === 'black') {
      brandColorCode = theme.palette.common.gray.uiBlack;
    }

    return {
      backgroundColor: brandColorCode
    };
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

    ${({ theme, brandColor, placement, triangleLeft, round }): CSSObject => {
      let brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

      if (brandColor === 'black') {
        brandColorCode = theme.palette.common.gray.uiBlack;
      }

      switch (placement) {
        case 'left':
          return {
            top: '50%',
            right: round === '16' ? -10 : -15,
            color: brandColorCode,
            transform: 'translateY(-50%) rotate(90deg)'
          };
        case 'right':
          return {
            top: '50%',
            left: round === '16' ? -10 : -15,
            color: brandColorCode,
            transform: 'translateY(-50%) rotate(270deg)'
          };
        case 'bottom':
          return {
            top: -10,
            left: `${triangleLeft ? `${triangleLeft}px` : '50%'}`,
            color: brandColorCode,
            transform: `${triangleLeft ? 'rotate(0deg)' : 'translateX(-50%) rotate(0deg)'}`
          };
        default:
          return {
            bottom: -10,
            left: `${triangleLeft ? `${triangleLeft}px` : '50%'}`,
            color: brandColorCode,
            transform: `${triangleLeft ? 'rotate(180deg)' : 'translateX(-50%) rotate(180deg)'}`
          };
      }
    }}
  }
`;
