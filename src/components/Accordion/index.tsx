import { forwardRef, useEffect, useRef, useState } from 'react';
import type { HTMLAttributes, MouseEvent, PropsWithChildren, ReactElement } from 'react';

import type { GenericComponentProps } from '@types';
import Icon from '@components/Icon';

import { Content, ExpandIcon, StyledAccordion, Title, TitleWrapper } from './Accordion.styles';

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
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    if (!contentRef.current) return;

    setHeight(contentRef.current.clientHeight);
  }, []);

  return (
    <StyledAccordion ref={ref} hideLine={hideLine} onClick={onChange} css={customStyle} {...props}>
      <TitleWrapper>
        <Title>{title}</Title>
        <ExpandIcon open={open} disableRotate={disableRotate}>
          {!expandIcon && <Icon name="Arrow2DownOutlined" width={20} height={20} />}
          {expandIcon && expandIcon}
        </ExpandIcon>
      </TitleWrapper>
      <Content ref={contentRef} open={open} height={height} onClick={handleClick}>
        {children}
      </Content>
    </StyledAccordion>
  );
});

export default Accordion;
