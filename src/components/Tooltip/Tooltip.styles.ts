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

  ${({ disablePadding }): CSSObject => (disablePadding ? { padding: 0 } : {})}

  ${({ disableShadow }): CSSObject => (disableShadow ? { filter: 'inherit' } : {})}

  ${({ theme, brandColor }): CSSObject => {
    let brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    if (brandColor === 'black') {
      brandColorCode = theme.palette.common.black;
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

  &:after {
    content: '';
    position: absolute;

    ${({ theme, brandColor, placement, triangleLeft }): CSSObject => {
      const brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

      switch (placement) {
        case 'left':
          return {
            borderTop: '12.5px solid transparent',
            borderLeft: `15px solid ${brandColorCode}`,
            borderRight: '0 solid transparent',
            borderBottom: '12.5px solid transparent',
            top: '50%',
            right: -15,
            transform: 'translateY(-50%)'
          };
        case 'right':
          return {
            borderTop: '12.5px solid transparent',
            borderRight: `15px solid ${brandColorCode}`,
            borderLeft: '0 solid transparent',
            borderBottom: '12.5px solid transparent',
            top: '50%',
            left: -15,
            transform: 'translateY(-50%)'
          };
        case 'bottom':
          return {
            borderTop: '0 solid transparent',
            borderRight: '12.5px solid transparent',
            borderLeft: '12.5px solid transparent',
            borderBottom: `15px solid ${brandColorCode}`,
            top: -15,
            left: `${triangleLeft ? `${triangleLeft}px` : '50%'}`,
            transform: `${triangleLeft ? 'none' : 'translateX(-50%)'}`
          };
        default:
          return {
            borderTop: `15px solid ${brandColorCode}`,
            borderRight: '12.5px solid transparent',
            borderLeft: '12.5px solid transparent',
            borderBottom: '0 solid transparent',
            bottom: -15,
            left: `${triangleLeft ? `${triangleLeft}px` : '50%'}`,
            transform: `${triangleLeft ? 'none' : 'translateX(-50%)'}`
          };
      }
    }}
  }
`;
