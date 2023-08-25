import styled, { CSSObject } from '@emotion/styled';

import type { AccordionProps } from '.';

export const StyledAccordion = styled.div<Pick<AccordionProps, 'hideLine'>>`
  position: relative;
  user-select: none;
  cursor: pointer;

  ${({
    theme: {
      palette: { common }
    },
    hideLine
  }): CSSObject =>
    !hideLine
      ? {
          borderBottom: `1px solid ${common.line01}`
        }
      : {}}
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px 0;
`;

export const Title = styled.div`
  flex-grow: 1;
  display: -webkit-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden;
  ${({
    theme: {
      typography: { h4 }
    }
  }): CSSObject => ({
    fontSize: h4.size,
    fontWeight: h4.weight.bold,
    letterSpacing: h4.letterSpacing,
    lineHeight: h4.letterSpacing
  })}
`;

export const ExpandIcon = styled.div<Pick<AccordionProps, 'open' | 'disableRotate'>>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ open, disableRotate }): CSSObject =>
    open && !disableRotate
      ? {
          transform: 'rotate(180deg)'
        }
      : {}};

  transition: transform 0.2s;
`;

export const Content = styled.div<
  Pick<AccordionProps, 'open'> & {
    height: number;
  }
>`
  overflow: hidden;
  height: ${({ open, height }) => {
    if (!height) {
      return 'auto';
    }
    if (open && height) {
      return `${height}px`;
    }
    return 0;
  }};
  pointer-events: ${({ open, height }) => (open && height ? 'auto' : 'none')};
  transition: height 0.2s;

  ${({ height }): CSSObject =>
    !height
      ? {
          opacity: 0,
          position: 'absolute',
          top: 0,
          zIndex: -1
        }
      : {}};
`;

export const MeasureContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
`;
