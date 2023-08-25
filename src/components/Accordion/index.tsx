import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { HTMLAttributes, MouseEvent, PropsWithChildren, ReactElement } from 'react';

import type { GenericComponentProps } from '@types';
import Icon from '@components/Icon';

import {
  Content,
  ExpandIcon,
  MeasureContent,
  StyledAccordion,
  Title,
  TitleWrapper
} from './Accordion.styles';

export interface AccordionProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  title: string;
  expandIcon?: ReactElement;
  onChange: () => void;
  hideLine?: boolean;
  disableRotate?: boolean;
}

const Accordion = forwardRef<HTMLDivElement, PropsWithChildren<AccordionProps>>(function Accordion(
  {
    children,
    open,
    onChange,
    title,
    expandIcon,
    hideLine = true,
    disableRotate,
    customStyle,
    ...props
  },
  ref
) {
  const measureContentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    if (!measureContentRef.current) return;

    setHeight(measureContentRef.current.clientHeight);
  }, [children]);

  return (
    <StyledAccordion ref={ref} hideLine={hideLine} onClick={onChange} css={customStyle} {...props}>
      <TitleWrapper>
        <Title>{title}</Title>
        <ExpandIcon open={open} disableRotate={disableRotate}>
          {!expandIcon && <Icon name="Arrow2DownOutlined" width={20} height={20} />}
          {expandIcon && expandIcon}
        </ExpandIcon>
      </TitleWrapper>
      <Content open={open} height={height} onClick={handleClick}>
        {children}
      </Content>
      <MeasureContent ref={measureContentRef}>{children}</MeasureContent>
    </StyledAccordion>
  );
});

export default Accordion;
